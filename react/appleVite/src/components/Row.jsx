import { useCallback, useEffect, useState } from "react";
import "../styles/Row.css";
import axios from "../api/axios";
import MovieModal from "./MovieModal";
import { imageBasePath } from "../../constant";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  const handleClick = (movie) => {
    setModalOpen(true);
    console.log(movie);
    setMovieSelected(movie);
  };

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
    console.log(response);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div
          className='slider__arrow-left'
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className='allow'>{"<"}</span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`${imageBasePath}${movie.backdrop_path}`}
              alt={movie.name}
              className='row__poster'
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div
          className='slider__arrow-right'
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className='allow'>{">"}</span>
        </div>
      </div>

      {modalOpen ? (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      ) : null}
    </div>
  );
};

export default Row;
