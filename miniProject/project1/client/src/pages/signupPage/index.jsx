import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <header>
        <h1 className='text-60 mb-50' onClick={() => navigate("/")}>
          TMDBapp
        </h1>
      </header>
      <main className='flex flex-col items-center'>
        <form className='flex flex-col w-500'>
          <input
            label='이름'
            placeholder='이메일을 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal'
          />
          <input
            label='이메일'
            placeholder='이메일을 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
          />
          <input
            label='비밀번호'
            placeholder='비밀번호를 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
          />
          <input
            label='비밀번호'
            placeholder='비밀번호를 다시 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
          />
          <button className='flex items-center justify-center w-full mt-20 font-semibold text-center text-white h-50 mobile:w-350 rounded-8 py-14 px-auto text-18 bg-primary'>
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
