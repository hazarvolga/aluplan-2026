export class ApiError extends Error {
  constructor(public status: number, public message: string, public data?: unknown) {
    super(message);
    this.name = "ApiError";
  }
}

type FetchOptions = RequestInit & {
  params?: Record<string, string | number | boolean>;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function request<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { params, headers, ...rest } = options;

  // Handle URL composition
  let url: string;
  if (endpoint.startsWith("http")) {
    url = endpoint;
  } else {
    // Remove leading slash to avoid double slashes if BASE_URL ends with one
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
    const cleanBaseUrl = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
    
    // If BASE_URL is present, join them. Otherwise use endpoint as relative path.
    url = cleanBaseUrl ? `${cleanBaseUrl}/${cleanEndpoint}` : `/${cleanEndpoint}`;
  }

  // Append query parameters
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes("?") ? "&" : "?") + queryString;
    }
  }

  const config: RequestInit = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { statusText: response.statusText };
      }
      throw new ApiError(response.status, errorData.message || "Bir hata oluştu", errorData);
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return null as unknown as T;
    }

    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu");
  }
}

export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) => request<T>(endpoint, { ...options, method: "GET" }),
  post: <T>(endpoint: string, body: unknown, options?: FetchOptions) => 
    request<T>(endpoint, { ...options, method: "POST", body: JSON.stringify(body) }),
  put: <T>(endpoint: string, body: unknown, options?: FetchOptions) => 
    request<T>(endpoint, { ...options, method: "PUT", body: JSON.stringify(body) }),
  patch: <T>(endpoint: string, body: unknown, options?: FetchOptions) => 
    request<T>(endpoint, { ...options, method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(endpoint: string, options?: FetchOptions) => request<T>(endpoint, { ...options, method: "DELETE" }),
};
