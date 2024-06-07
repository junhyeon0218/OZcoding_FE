import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import MovieDetailPage from "./pages/movieDetailPage";
import "./styles/global.css";
import Header from "./components/header";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import SearchPage from "./pages/searchPage";

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
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
