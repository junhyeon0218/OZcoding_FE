import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
