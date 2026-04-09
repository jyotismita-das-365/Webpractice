import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://ssiet.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-token");

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const clearAuthSession = () => {
  localStorage.removeItem("auth-token");
  localStorage.removeItem("auth-user");
};

export const saveAuthSession = (authPayload) => {
  localStorage.setItem("auth-token", authPayload.token);
  localStorage.setItem("auth-user", JSON.stringify(authPayload.user));
};

export const fetchCurrentUser = async () => {
  const { data } = await api.get("/api/auth/me");
  return data.user;
};

export const loginUser = async (payload) => {
  const { data } = await api.post("/api/auth/login", payload);
  return data;
};

export const registerUser = async (payload) => {
  const { data } = await api.post("/api/auth/register", payload);
  return data;
};

export const fetchStats = async () => {
  const { data } = await api.get("/api/stats");
  return data;
};

export const fetchEvents = async () => {
  const { data } = await api.get("/api/events");
  return data;
};

export const createContact = async (payload) => {
  const { data } = await api.post("/api/contacts", payload);
  return data;
};

export const createInquiry = async (payload) => {
  const { data } = await api.post("/api/inquiries", payload);
  return data;
};

export const createStudentQuery = async (payload) => {
  const { data } = await api.post("/api/student-queries", payload);
  return data;
};

export const createEvent = async (payload) => {
  const { data } = await api.post("/api/events", payload);
  return data;
};

export const fetchStoreItems = async () => {
  const { data } = await api.get("/api/store");
  return data;
};

export const createStoreItem = async (payload) => {
  const { data } = await api.post("/api/store", payload);
  return data;
};

export const updateStoreItem = async (id, payload) => {
  const { data } = await api.put(`/api/store/${id}`, payload);
  return data;
};

export const deleteStoreItem = async (id) => {
  const { data } = await api.delete(`/api/store/${id}`);
  return data;
};
