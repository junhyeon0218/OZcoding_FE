import "./App.css";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";

function Layout() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
