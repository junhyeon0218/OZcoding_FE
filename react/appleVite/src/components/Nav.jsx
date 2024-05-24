import { useEffect, useState } from "react";
import "../styles/Nav.css";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState("false");
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
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
      <Input
        type='text'
        placeholder='영화를 검색해주세요.'
        className='nav__input'
        value={searchValue}
        onChange={handleChange}
      />
      <Login>로그인</Login>
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

export default Nav;
