import RestAPIClient from './RestAPIClient';

global.fetch = jest.fn();

describe('RestAPIClient', () => {
  let apiClient: RestAPIClient;

  beforeEach(() => {
    apiClient = new RestAPIClient('https://api.example.com');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should make a successful GET request', async () => {
    const mockData = { id: 1, name: 'Test Item' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await apiClient.get('/test-endpoint');
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  });

  test('should throw an error if the response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(apiClient.get('/test-endpoint')).rejects.toThrow(
      'HTTP Error: 404 Not Found'
    );
  });

  test('should throw an error if the JSON response is invalid', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => {
        throw new Error('Invalid JSON');
      },
    });

    await expect(apiClient.get('/test-endpoint')).rejects.toThrow(
      'Invalid JSON response'
    );
  });

  test('should handle network or fetch errors', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    await expect(apiClient.get('/test-endpoint')).rejects.toThrow('Network Error');
  });

  test('should handle query parameters in the URL', async () => {
    const mockData = { id: 1, name: 'Test Item' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await apiClient.get('/test-endpoint', 'param1=value1&param2=value2');
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.example.com/test-endpoint?param1=value1&param2=value2',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
  });

  test('should use default headers if no headers are provided', async () => {
    const mockData = { id: 1, name: 'Test Item' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await apiClient.get('/test-endpoint');
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  });

  test('should accept additional headers', async () => {
    const mockData = { id: 1, name: 'Test Item' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const customHeaders = {
      Authorization: 'Bearer token',
    };

    const result = await apiClient.get('/test-endpoint', '', customHeaders);
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/test-endpoint', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...customHeaders },
    });
  });
});
