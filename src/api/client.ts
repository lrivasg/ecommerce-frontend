const API_URL_DEV = "http://localhost:3000";
const API_URL = "https://ecommerce-api-ts.onrender.com";

export const api = {
  get: async (endpoint: string) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    return res.json();
  },

  post: async (endpoint: string, data: any) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });

    return res.json();
  }
};