import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchFavorites,
  addFavorite,
  removeFavorite,
} from "../api/favoritesApi";

export const fetchFavoritesAsync = createAsyncThunk(
  "favorites/fetchFavorites",
  async (userId) => {
    const response = await fetchFavorites(userId);
    return response;
  }
);

export const addFavoriteAsync = createAsyncThunk(
  "favorites/addFavorite",
  async ({ userId, movie }) => {
    const response = await addFavorite(userId, movie);
    console.log(response);
    return response;
  }
);

export const removeFavoriteAsync = createAsyncThunk(
  "favorites/removeFavorite",
  async ({ userId, movieId }) => {
    const response = await removeFavorite(userId, movieId);
    return response;
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addFavoriteAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        return state.filter((movie) => movie.id !== action.payload.id);
      });
  },
});

export default favoritesSlice.reducer;
