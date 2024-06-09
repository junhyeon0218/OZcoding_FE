import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase"; // Firebase 초기화 파일 경로

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto gap-38 w-520 mobile:w-350'>
      <header>
        <h1 className='text-60 ' onClick={() => navigate("/")}>
          TMDBapp
        </h1>
      </header>
      <main className='flex flex-col items-center w-full'>
        <form
          className='flex flex-col items-start w-full gap-8'
          onSubmit={handleSignup}
        >
          <input
            type='text'
            placeholder='이름을 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal'
          />
          <input
            type='email'
            placeholder='이메일을 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
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
          <input
            type='password'
            placeholder='비밀번호를 다시 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type='submit'
            className='flex items-center justify-center w-full mt-20 font-semibold text-center text-white h-50 mobile:w-350 rounded-8 py-14 px-auto text-18 bg-primary'
          >
            회원가입
          </button>
        </form>
      </main>
      <footer className='mt-15'>
        <p className=''>
          이미 가입하셨나요?{" "}
          <Link
            to={"/login"}
            className='ml-10 underline cursor-pointer text-blue-76'
          >
            로그인하기
          </Link>
        </p>
      </footer>
    </div>
  );
}
