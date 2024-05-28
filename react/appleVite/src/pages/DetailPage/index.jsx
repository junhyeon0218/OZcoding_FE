import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageBasePath } from "../../../constant";
import styled from "styled-components";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) {
    return null;
  } else {
    return (
      <Section>
        <Banner>
          <Poster
            style={{
              backgroundImage: `url(${imageBasePath}${movie.poster_path})`,
            }}
          />
          <MovieInfo>
            <Title>{movie.title}</Title>
            <Genres>
              {movie.genres.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
              ))}
            </Genres>
            <Rating>Rating: {movie.vote_average}</Rating>
            <Overview>{movie.overview}</Overview>
          </MovieInfo>
        </Banner>
      </Section>
    );
  }
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

const Poster = styled.div`
  width: 100%;
  height: 50%;
  background-size: cover;
  background-position: center;
`;

const MovieInfo = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Genres = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Genre = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
`;

const Rating = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 1rem;
`;

export default DetailPage;
