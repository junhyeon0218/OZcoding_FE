import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("all"); // 초기 검색어를
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      if (query) {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&lang=ko&per_page=12&page=1&client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`
        );
        setPhotos(response.data.results);
      }
    };

    fetchPhotos();
  }, [query]); // query가 변경될 때마다 fetchPhotos를 호출

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputValue); // 검색어를 업데이트
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='검색어 입력'
        />
        <button type='submit'>검색</button>
      </form>
      <div>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
