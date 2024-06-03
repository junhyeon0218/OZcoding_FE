import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMoviesList, setDetails } from "../../stores/moviesSlice";
import MovieCard from "../../components/movieCard";
import Banner from "../../components/banner";

const MainPage = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/movies")
      .then((response) => {
        setMovies(response.data.results);
        dispatch(setMoviesList(response.data.results));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/movie-details")
      .then((response) => {
        setMovieDetails(response.data);
        dispatch(setDetails(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  console.log(movies);
  console.log(movieDetails);

  return (
    <>
      <Banner />
      <MovieCard />
    </>
  );
};

export default MainPage;
