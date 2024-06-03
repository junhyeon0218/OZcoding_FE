import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const movies = useSelector((state) => state.movies.list);

  return (
    <div className='flex flex-wrap justify-center w-1280 mx-auto mt-50'>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='bg-white shadow-md rounded-4 overflow-hidden m-4 w-256 relative group'
        >
          <Link to={`/detail/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className='w-full h-full object-cover'
            />
            <div className='p-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <h2 className='text-2xl font-bold mb-2'>{movie.title}</h2>
              <p className='text-xl'>{movie.vote_average}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
