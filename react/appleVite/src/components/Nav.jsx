import { useEffect, useState } from "react";
import "../styles/Nav.css";
import { styled } from "styled-components";

const Nav = () => {
  const [show, setShow] = useState("false");

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
  return (
    <>
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
      </Navwrapper>
    </>
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

export default Nav;
