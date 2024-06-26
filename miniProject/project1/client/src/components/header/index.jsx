import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, getAuth } from "firebase/auth";
import { logout } from "../../stores/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const auth = getAuth();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleMyPage = () => {
    navigate("/mypage");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='fixed top-0 z-10 flex items-center justify-center w-full bg-white border-b-2 border-solid shadow-lg border-blue-3f h-80 tablet:px-10'>
      <div className='flex items-center justify-between w-1320'>
        <h1
          onClick={() => navigate("/")}
          className='text-5xl textShadow-md mobile:text-20'
        >
          TMDBapp
        </h1>
        <div>
          <input
            type='text'
            className='h-40 pl-10 border-2 border-solid w-300 border-primary rounded-5 tablet:w-200 mobile:w-150 mobile:pl-5'
            placeholder='검색어를 입력하세요'
            value={value}
            onChange={handleChange}
          />
        </div>

        {/* user가 null인 경우에는 로그인/회원가입 버튼, user가 존재하면 유저 정보 */}
        {user ? (
          <div className='flex'>
            <button onClick={handleMyPage}>
              {user.displayName || user.email} 님
            </button>
            <button className='ml-20' onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <button
            className='transition-transform duration-200 ease-in-out transform border-2 border-solid cursor-pointer h-45 w-130 border-blue-3f rounded-4 hover:scale-105 hover:bg-blue-3f hover:text-white hover:border-none mobile:text-14 mobile:w-110 mobile:h-40'
            onClick={() => navigate("/login")}
          >
            <div className='pt-3'>로그인/회원가입</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
