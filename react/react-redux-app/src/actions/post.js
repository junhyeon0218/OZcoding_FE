import axios from "axios";

// 리액트 컴포넌트가 아닌 자바스크립트 모듈이기 때문에 useDispatch, useSelector를 사용할 수 없다.
// const dispatch = useDispatch();
// const post = useSelector((state) => state.posts);

// redux thunk를 사용하면 dispatch와 selector를 사용할 수 있다.

// export const fetchposts = async () => {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(data);
//   dispatch({ type: "FETCH_POSTS", payload: data });
// };

export const fetchposts = () =>
  async function fetchpostsThunk(dispatch, getState) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    dispatch({ type: "FETCH_POSTS", payload: data });
  };
