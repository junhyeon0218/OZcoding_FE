import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageBasePath } from "../../../constant";

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
      <section>
        <img src={`${imageBasePath}${movie.backdrop_path}`} alt='detail' />
      </section>
    );
  }
};

export default DetailPage;
