import { useDispatch, useSelector } from "react-redux";
import { increment, oneSecIncrement } from "./action/actions";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className='counter'>
      <h1>redux사용해보기</h1>
      <div className='btn'>
        <h1>{count}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(oneSecIncrement())}>1초 후 +</button>
        </div>
      </div>
    </div>
  );
}

export default App;
