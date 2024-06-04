import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const movies = useSelector((state) => state.movies.list);
  const [displayedMovies, setDisplayedMovies] = useState([...movies]);

  useEffect(() => {
    setDisplayedMovies([...movies]);
  }, [movies]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setDisplayedMovies((prevMovies) => [...prevMovies, ...movies]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [movies]);

  return (
    <div className='flex flex-wrap justify-center mx-auto w-1280 mt-50'>
      {displayedMovies.map((movie, index) => (
        <div
          key={`${movie.id}-${index}`}
          className='relative m-4 overflow-hidden bg-white shadow-md rounded-4 w-256 group'
        >
          <Link to={`/detail/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 transform translate-y-full bg-black bg-opacity-75 group-hover:translate-y-0'>
              <h2 className='mb-2 text-2xl font-bold'>{movie.title}</h2>
              <p className='text-xl'>{movie.vote_average}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
