import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 z-10 flex items-center justify-center w-full bg-white border-b-2 border-solid shadow-lg border-blue-3f h-80'>
      <div className='flex items-center justify-between w-1320'>
        <h1 onClick={() => navigate("/")} className='text-5xl textShadow-md'>
          TMDBapp
        </h1>
        <button
          className='transition-transform duration-200 ease-in-out transform border-2 border-solid cursor-pointer h-45 w-130 border-blue-3f rounded-4 hover:scale-105 hover:bg-blue-3f hover:text-white hover:border-none'
          onClick={() => navigate("/login")}
        >
          로그인/회원가입
        </button>
      </div>
    </div>
  );
};

export default Header;
