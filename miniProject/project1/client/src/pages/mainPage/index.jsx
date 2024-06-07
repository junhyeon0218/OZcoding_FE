// src/pages/mainPage/MainPage.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../api/fetchMovies";
import MovieCard from "../../components/movieCard";
import Banner from "../../components/banner";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies(dispatch);
  }, [dispatch]);

  return (
    <>
      <Banner />
      <MovieCard />
    </>
  );
};

export default MainPage;
