import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteAsync,
  removeFavoriteAsync,
} from "../../stores/favoritesSlice"; // 찜목록 액션 임포트

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.allList.find((movie) => movie.id === parseInt(id))
  );
  const userId = useSelector((state) => state.auth.user.email); // 사용자 ID 가져오기
  console.log(userId);
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  console.log(isFavorite);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoriteAsync({ userId, movieId: movie.id }));
    } else {
      dispatch(addFavoriteAsync({ userId, movie }));
    }
  };

  return (
    <div className='flex items-center justify-center h-full p-4 mx-auto w-1280 mt-100 tablet:w-full tablet:flex-col'>
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
        <button
          onClick={handleFavoriteClick}
          className={`mt-4 p-3 pt-5 text-white w-100 rounded-4 ${
            isFavorite ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {isFavorite ? "찜 삭제" : "찜 하기"}
        </button>
        <hr className='my-4' />
        <p className='text-3xl text-primary'>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
