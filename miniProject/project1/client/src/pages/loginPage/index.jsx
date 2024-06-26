import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../stores/authSlice";
import app from "../../firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(login(user));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      console.log(userCredential);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(login(user));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-38'>
        <h1 className='text-60' onClick={() => navigate("/")}>
          TMDBapp
        </h1>
        <form
          className='flex flex-col items-start gap-8'
          onSubmit={handleLogin}
        >
          <input
            type='email'
            placeholder='이메일을 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='비밀번호를 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type='submit'
            className='flex items-center justify-center mt-20 font-semibold text-center text-white h-50 mobile:w-350 w-520 rounded-8 py-14 px-auto text-18 bg-primary'
          >
            로그인
          </button>
        </form>
        <div className='font-medium text-black-33'>
          회원이 아니신가요?
          <Link
            to={"/signup"}
            className='ml-10 underline cursor-pointer text-blue-76'
          >
            회원가입 하기
          </Link>
        </div>
        <button onClick={handleGoogleLogin}>구글아이디로 로그인</button>
      </div>
    </div>
  );
}
