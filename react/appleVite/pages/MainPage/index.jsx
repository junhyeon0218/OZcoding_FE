import Banner from "../../src/components/Banner";
import Nav from "../../src/components/Nav";
import { styled } from "styled-components";
import Row from "../../src/components/Row";
import requests from "../../src/api/requests";

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Row title='Trending Now' id='TN' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
      <Row
        title='Action Movies'
        id='AM'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='Comedy Movies'
        id='CM'
        fetchUrl={requests.fetchComedyMovies}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

export default MainPage;