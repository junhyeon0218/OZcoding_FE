import { useSelector } from "react-redux";

const MyPage = () => {
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return (
    <div className='mx-auto mt-100 w-1200 mobile:w-full'>
      <div className='w-full border-2 border-primary h-100'>{user.email}</div>
      <div className='h-auto'></div>
    </div>
  );
};

export default MyPage;
