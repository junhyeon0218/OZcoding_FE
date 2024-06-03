import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import MovieDetailPage from "./pages/movieDetailPage";
import "./styles/global.css";
import Header from "./components/header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='detail/:id' element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
