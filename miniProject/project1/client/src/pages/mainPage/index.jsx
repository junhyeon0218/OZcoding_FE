import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { setMoviesList, setDetails } from "../../stores/moviesSlice";
import MovieCard from "../../components/movieCard";
import Banner from "../../components/banner";
import requests from "../../api/requests";

const MainPage = () => {
  const dispatch = useDispatch();

  // axios 요청 함수
  const fetchData = async () => {
    // 현재 상영 중인 영화 정보를 가져오기
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response.data.results);
    dispatch(setMoviesList(response.data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <MovieCard />
    </>
  );
};

export default MainPage;
