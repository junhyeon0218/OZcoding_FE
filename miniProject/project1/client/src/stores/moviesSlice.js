import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    allList: [],
    nowList: [],
    topList: [],
    trendList: [],
    actionList: [],
    comedyList: [],
    horrorList: [],
    romanceList: [],
    documentList: [],
  },
  reducers: {
    setMoviesList: (state, action) => {
      state.allList = action.payload;
    },

    setNowMoviesList: (state, action) => {
      state.nowList = action.payload;
    },

    setTopMoviesList: (state, action) => {
      state.topList = action.payload;
    },

    setTrendMoviesList: (state, action) => {
      state.trendList = action.payload;
    },

    setActionMoviesList: (state, action) => {
      state.actionList = action.payload;
    },

    setComedyMoviesList: (state, action) => {
      state.comedyList = action.payload;
    },

    setHorrorMoviesList: (state, action) => {
      state.horrorList = action.payload;
    },

    setRomanceMoviesList: (state, action) => {
      state.romanceList = action.payload;
    },

    setDocumentMoviesList: (state, action) => {
      state.documentList = action.payload;
    },
  },
});

export const {
  setMoviesList,
  setNowMoviesList,
  setTopMoviesList,
  setTrendMoviesList,
  setActionMoviesList,
  setComedyMoviesList,
  setHorrorMoviesList,
  setRomanceMoviesList,
  setDocumentMoviesList,
} = moviesSlice.actions;
export default moviesSlice.reducer;
