import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import axios from "../../api/axios";

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
      <section className='flex flex-wrap w-full max-w-screen-xl px-4 mx-auto mt-100'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            return (
              <div
                className='w-full p-20 sm:w-1/2 md:w-1/3 lg:w-1/4'
                key={movie.id}
              >
                <div
                  onClick={() => navigate(`/detail/${movie.id}`)}
                  className='transition-transform transform cursor-pointer hover:scale-105'
                >
                  <img
                    src={movieImageUrl}
                    alt='movie'
                    className='w-full h-auto rounded-lg shadow-lg'
                  />
                  <div className='mt-2'>
                    <h3 className='font-semibold text-16'>
                      {movie.title || movie.name}
                    </h3>
                    <p className='text-gray-600 text-14'>
                      {movie.vote_average}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <p className='font-semibold text-16'>
            검색어 <span className='text-red-500'>{debouncedSearchTerm}</span>{" "}
            에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
