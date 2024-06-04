import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../../lib/utils/regexp";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-38'>
        <h1 className='text-60' onClick={() => navigate("/")}>
          TMDBapp
        </h1>
        <form className='flex flex-col items-start gap-8'>
          <input
            label='이메일'
            placeholder='이메일을 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal'
          />

          <input
            label='비밀번호'
            placeholder='비밀번호를 입력해 주세요'
            className='flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal mt-20'
          />

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
      </div>
    </div>
  );
}
