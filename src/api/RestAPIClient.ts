class RestAPIClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    try {
      return await response.json();
    } catch (error) {
      console.log('Error: ', error)
      throw new Error("Invalid JSON response");
    }
  }

  private handleError(error: unknown): void {
    if (error instanceof Error) {
      console.error("Error: ", error.message);
      throw error;
    }
    console.error("An unknown error occurred");
    throw new Error("An unknown error occurred");
  }

  async get<T>(endpoint: string, queryParams?: string, headers: HeadersInit = {}): Promise<T> {
    const queryParamsUrl = queryParams ? `?${queryParams}` : '';
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}${queryParamsUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return await this.handleResponse<T>(response);
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }
}

export default RestAPIClient;
