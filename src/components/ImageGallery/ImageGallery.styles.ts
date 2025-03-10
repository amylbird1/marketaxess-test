import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
    padding-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px; 
    
    @media (max-width: 768px) {
        justify-content: space-between;
        gap: 8px;
    }
`;

export const ImageItem = styled.div`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

