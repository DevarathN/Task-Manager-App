import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchTasks = () => API.get("/");
export const fetchTask = (id) => API.get(`/${id}`);
export const createTask = (task) => API.post("/", task);
export const updateTask = (id, task) => API.put(`/${id}`, task);
export const deleteTask = (id) => API.delete(`/${id}`);


