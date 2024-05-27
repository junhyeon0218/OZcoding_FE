import { useEffect, useState } from "react";
import "../styles/Nav.css";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase";

const Nav = () => {
  const [show, setShow] = useState("false");
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : {}
  );

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const listener = () => {
    if (window.scrollY > 50) {
      setShow("true");
    } else setShow("false");
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else if (user && pathname === "/") {
        navigate("/main");
      }
    });
  }, [auth, navigate, pathname]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUserData(result.user);
        localStorage.setItem("userData", JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        localStorage.removeItem("userData");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navwrapper show={show}>
      <Logo>
        <img
          src='../../../public/appletv.png'
          alt='logo'
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>

      {pathname === "/" ? (
        <Login onClick={handleAuth}>로그인</Login>
      ) : (
        <Input
          type='text'
          placeholder='영화를 검색해주세요.'
          className='nav__input'
          value={searchValue}
          onChange={handleChange}
        />
      )}

      {pathname !== "/" ? (
        <SignOut>
          <UserImg src={userData.photoURL} alt={userData.displayName} />
          <DropDown>
            <span onClick={handleLogout}>sign out</span>
          </DropDown>
        </SignOut>
      ) : null}
    </Navwrapper>
  );
};

const Navwrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) =>
    props.show === "true" ? "transparent" : "#000000"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 70px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 10px;
  img {
    display: block;
    width: 100%;
  }
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: 1px solid lightgrey;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  min-width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: end;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Nav;
