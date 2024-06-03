import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    Details: {},
  },
  reducers: {
    setMoviesList: (state, action) => {
      state.list = action.payload;
    },

    setDetails: (state, action) => {
      state.Details = action.payload;
    },
  },
});

export const { setMoviesList, setDetails } = moviesSlice.actions;
export default moviesSlice.reducer;
