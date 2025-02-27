import axios from "axios";

// Backend URL (change later when hosting)
const API_URL = "http://localhost:5000/api";

// Fetch all testimonials
export const fetchTestimonials = async () => {
  const response = await axios.get(`${API_URL}/testimonials`);
  return response.data;
};

// Add a new testimonial
export const addTestimonial = async (name, message) => {
  const response = await axios.post(`${API_URL}/testimonials`, { name, message });
  return response.data;
};

// Admin login
export const adminLogin = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

// Fetch volunteers
export const fetchVolunteers = async () => {
  const response = await axios.get(`${API_URL}/volunteers`);
  return response.data;
};

// Submit volunteer form
export const addVolunteer = async (name, email, skills) => {
  const response = await axios.post(`${API_URL}/volunteers`, { name, email, skills });
  return response.data;
};
