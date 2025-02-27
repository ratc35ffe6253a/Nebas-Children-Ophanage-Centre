import axios from "axios";
const API_URL = "http://localhost:5000/api"; // Change later for production

export const fetchTestimonials = async () => {
  const response = await axios.get(`${API_URL}/testimonials`);
  return response.data;
};
