import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import "../../styles/SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  // 검색어 가져오기
  const query = useQuery();
  const debouncedSearchTerm = useDebounce(query.get("q"), 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovies(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovies = async (debouncedSearchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${debouncedSearchTerm}`
      );
      setSearchResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className='movie' key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className='movie__column-poster'
                >
                  <img
                    src={movieImageUrl}
                    alt='movie'
                    className='movie__poster'
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='no-retults'>
        <div className='no-results__text'>
          <p>검색어 {debouncedSearchTerm} 에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
