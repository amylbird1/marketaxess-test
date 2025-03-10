import { useState, useTransition, useCallback, useEffect } from 'react';
import RestAPIClient from '../../../api/RestAPIClient';

interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CAT_API_URL = 'https://api.thecatapi.com';
const apiClient = new RestAPIClient(CAT_API_URL);

const useFetchImages = ({ replace = false }) => {
  const [images, setImages] = useState<Set<Image>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchImages = useCallback(async () => {
    setError(null);
    try {
      const data: Image[] = await apiClient.get('/v1/images/search', 'limit=10');
      
      startTransition(() => {
        setImages((prev) => {
          // if replace is set to TRUE
          // we override img data and not append
          if (replace) {
            return new Set(data)
          }

          const newImages = new Set(prev);
          data.forEach((image: Image) => newImages.add(image)); 
          return newImages;
        });
      });
    } catch (error) {
      setError("Failed to fetch images");
      console.error("Error fetching images:", error);
    }
  }, [replace]);

  const deleteImages = useCallback((imageIdsToDelete: Set<string>) => {
    const updatedImages = new Set<Image>();
    images.forEach(image => {
      if (!imageIdsToDelete.has(image.id)) {
        updatedImages.add(image);
      }
    });
    setImages(updatedImages)
  }, [images, setImages])

  useEffect(() => {
    fetchImages()
  }, [fetchImages]);

  return { images: Array.from(images), error, isPending, fetchImages, deleteImages }
};

export default useFetchImages;
