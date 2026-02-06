const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface RequestOptions extends RequestInit {
  token?: string;
}

async function fetchApi(endpoint: string, options: RequestOptions = {}) {
  const url = `${API_URL}${endpoint}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (options.token) {
    headers['Authorization'] = `Bearer ${options.token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Auth API
export const authApi = {
  register: (data: { email: string; password: string; firstName: string; lastName: string; restaurantName: string }) =>
    fetchApi('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  login: (data: { email: string; password: string }) =>
    fetchApi('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  me: (token: string) =>
    fetchApi('/api/v1/auth/me', {
      token,
    }),
};

// Menu API
export const menuApi = {
  getAll: () => fetchApi('/api/v1/menus'),
  getById: (id: string) => fetchApi(`/api/v1/menus/${id}`),
  create: (data: any, token: string) =>
    fetchApi('/api/v1/menus', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),
};

// Order API
export const orderApi = {
  getAll: () => fetchApi('/api/v1/orders'),
  create: (data: any, token: string) =>
    fetchApi('/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),
};

export default fetchApi;
