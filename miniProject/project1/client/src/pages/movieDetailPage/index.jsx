import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movies.list.find((movie) => movie.id === parseInt(id))
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className='flex items-center justify-center h-full p-4 mx-auto w-1280 mt-100'>
      <div className='w-1/3'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='object-cover w-full h-auto mb-4'
        />
      </div>
      <div className='flex flex-col w-2/3 h-full pl-4 justify-evenly'>
        <h2 className='mb-4 text-5xl font-bold text-primary'>{movie.title}</h2>
        <p className='mb-4 text-3xl text-primary'>평점: {movie.vote_average}</p>

        <hr className='my-4' />
        <p className='text-3xl text-primary'>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
