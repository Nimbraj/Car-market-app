const API_BASE = '/api';

async function fetchJSON(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Get all cars with optional filters
  getCars: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return fetchJSON(`${API_BASE}/cars?${params}`);
  },

  // Get single car by id
  getCar: (id) => fetchJSON(`${API_BASE}/cars/${id}`),

  // Get cars by user id
  getUserCars: (userId) => fetchJSON(`${API_BASE}/cars/user/${userId}`),

  // Create new car listing
  createCar: (data) =>
    fetchJSON(`${API_BASE}/cars`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Update car listing
  updateCar: (id, data) =>
    fetchJSON(`${API_BASE}/cars/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  // Delete car listing
  deleteCar: (id) =>
    fetchJSON(`${API_BASE}/cars/${id}`, {
      method: 'DELETE',
    }),
};

