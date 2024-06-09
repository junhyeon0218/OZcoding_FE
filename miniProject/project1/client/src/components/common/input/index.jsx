import { MouseEvent, forwardRef, useState } from "react";

const Input = ({ isError, label, placeholder, size, ...props }) => {
  const [passwordType, setPasswordType] = useState("password");
  const eyeImage =
    passwordType === "password"
      ? "/images/input/eye-off.png"
      : "/images/input/eye-on.png";

  const handlePasswordVisible = (e) => {
    e.preventDefault();
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };
  return (
    <div
      className={`relative flex flex-col items-start justify-center gap-8 ${size}`}
    >
      <label htmlFor={label} className='font-normal text-center text-16'>
        {label}
      </label>
      <input
        id={label}
        name={label}
        className={`flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal ${
          isError ? "focus:border-red" : ""
        }`}
        placeholder={placeholder}
        type={label === "비밀번호" ? passwordType : "text"}
        autoComplete='off'
        // ref={ref}
        {...props}
      />
      {label === "비밀번호" && (
        <button
          className='absolute translate-y-16 right-16'
          type='button'
          onClick={handlePasswordVisible}
        >
          {/* <Image
            width={24}
            height={24}
            src={eyeImage}
            alt='password toggle'
            sizes='24px'
          /> */}
        </button>
      )}
    </div>
  );
};

export default Input;
