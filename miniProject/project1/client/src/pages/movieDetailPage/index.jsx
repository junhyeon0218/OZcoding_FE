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
    <div className='w-1280 mx-auto p-4 flex justify-center items-center h-full mt-100'>
      <div className='w-1/3'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='w-full h-auto object-cover mb-4'
        />
      </div>
      <div className='w-2/3 pl-4 flex flex-col justify-evenly h-full'>
        <h2 className='text-5xl font-bold mb-4 text-white'>{movie.title}</h2>
        <p className='text-white text-3xl mb-4'>평점: {movie.vote_average}</p>

        <hr className='my-4' />
        <p className='text-white text-3xl'>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
