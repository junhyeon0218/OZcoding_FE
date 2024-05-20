import { useEffect, useState } from "react";
import "../styles/Banner.css";
import { styled } from "styled-components";
// 임의로 지정한 axios 요청
import axios from "../api/axios";
import requests from "../api/requests";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // axios 요청 함수
  const fetchData = async () => {
    // 현재 상영 중인 영화 정보를 가져오기
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);
    // 여러 영화 중 영화 하나의 ID를 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;
    console.log(movieId);

    // 영화 상세 정보를 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (!movie) return <div>Loading...</div>;

  if (!isClicked) {
    return (
      <div
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie.videos?.results[0]?.key ? (
              <button
                className='banner__button play'
                onClick={() => {
                  setIsClicked(true);
                }}
              >
                Play
              </button>
            ) : null}
          </div>
          <p className='banner__description'>{truncate(movie.overview, 100)}</p>
        </div>
        <div className='banner__fadeBottom'></div>
      </div>
    );
  } else {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos?.results[0]?.key}?controls=0&autoplay=1&mute=1`}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></Iframe>
          </HomeContainer>
        </Container>
        <button
          onClick={() => {
            setIsClicked(false);
          }}
        >
          x
        </button>
      </>
    );
  }
};

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Banner;
