import { useLocation, useParams } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  console.log(location);

  return <div>SearchPage</div>;
};

export default SearchPage;
