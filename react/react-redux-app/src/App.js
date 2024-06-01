import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchposts } from "./actions/post";

function App() {
  const [todoValue, setTodoValue] = useState("");

  // redux store에 있는 counter의 값 가져오기
  // store.getState()와 동일
  const counter = useSelector((state) => state.counter);
  // store에 있는 todos의 값 가져오기
  const todos = useSelector((state) => state.todos);
  // store에 있는 posts의 값 가져오기
  const posts = useSelector((state) => state.posts);

  // store.dispatch랑 동일
  const dispatch = useDispatch();

  // posts의 값 가져오기
  useEffect(() => {
    dispatch(fetchposts());
  }, []);

  const onChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoValue);
    setTodoValue("");
    dispatch({
      type: "ADD_TODO",
      todo: todoValue,
    });
  };

  const handleIncrement = () => {
    // store에 있는 state를 업데이트 해야한다.
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className='App'>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type='text' value={todoValue} onChange={onChange} />
          <input type='submit' />
        </form>
      </div>
      <div>
        <div>{counter}</div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
