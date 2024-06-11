import axios from "axios";

const API_URL = "http://localhost:3001/api/favorites";

export const fetchFavorites = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

export const addFavorite = async (userId, movie) => {
  const response = await axios.post(API_URL, { userId, movie });
  return response.data;
};

export const removeFavorite = async (userId, movieId) => {
  const response = await axios.delete(API_URL, { data: { userId, movieId } });
  return response.data;
};
