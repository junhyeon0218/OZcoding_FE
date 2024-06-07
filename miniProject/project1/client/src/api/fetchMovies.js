import axios from "./axios";
import requests from "./requests";
import {
  setMoviesList,
  setNowMoviesList,
  setTopMoviesList,
  setTrendMoviesList,
  setActionMoviesList,
  setComedyMoviesList,
  setHorrorMoviesList,
  setRomanceMoviesList,
  setDocumentMoviesList,
} from "../stores/moviesSlice";

// 영화 객체 타입 통일
const normalizeMovieData = (movie) => {
  return {
    id: movie.id,
    title: movie.title || movie.name,
    original_title: movie.original_title || movie.original_name,
    overview: movie.overview,
    vote_average: movie.vote_average,
    backdrop_path: movie.backdrop_path,
    open_date: movie.release_date || movie.first_air_date,
    poster_path: movie.poster_path,
  };
};

export const fetchMovies = async (dispatch) => {
  try {
    // 여러 요청을 병렬로 실행
    const [
      nowPlayingResponse,
      trendingResponse,
      topRatedResponse,
      actionResponse,
      comedyResponse,
      horrorRsponse,
      romanceResponse,
      documentResponse,
    ] = await Promise.all([
      axios.get(requests.fetchNowPlaying),
      axios.get(requests.fetchTrending),
      axios.get(requests.fetchTopRated),
      axios.get(requests.fetchActionMovies),
      axios.get(requests.fetchComedyMovies),
      axios.get(requests.fetchHorrorMovies),
      axios.get(requests.fetchRomanceMoives),
      axios.get(requests.fetchDocumentaries),
    ]);

    // 각각의 결과를 Redux 스토어에 저장
    dispatch(setNowMoviesList(nowPlayingResponse.data.results));
    dispatch(setTrendMoviesList(trendingResponse.data.results));
    dispatch(setTopMoviesList(topRatedResponse.data.results));
    dispatch(setActionMoviesList(actionResponse.data.results));
    dispatch(setComedyMoviesList(comedyResponse.data.results));
    dispatch(setHorrorMoviesList(horrorRsponse.data.results));
    dispatch(setRomanceMoviesList(romanceResponse.data.results));
    dispatch(setDocumentMoviesList(documentResponse.data.results));

    // 리스트 합치기
    const allMovies = [
      ...nowPlayingResponse.data.results,
      ...trendingResponse.data.results,
      ...topRatedResponse.data.results,
      ...actionResponse.data.results,
      ...comedyResponse.data.results,
      ...horrorRsponse.data.results,
      ...romanceResponse.data.results,
      ...documentResponse.data.results,
    ];

    // 리스트 중복 제거
    const moviesData = Array.from(
      new Set(allMovies.map((movie) => movie.id))
    ).map((id) => allMovies.find((movie) => movie.id === id));

    // 데이터 객체 타입 통일
    const movies = moviesData.map(normalizeMovieData);

    // 스토어에 저장
    dispatch(setMoviesList(movies));
    console.log(movies);
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
};
