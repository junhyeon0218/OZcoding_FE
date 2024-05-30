import "./App.css";
import { useState } from "react";

function App({ value, onIncrement, onDecrement }) {
  const [todoValue, setTodoValue] = useState("");

  const onChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoValue);
    setTodoValue("");
  };

  return (
    <div className='App'>
      <div>
        <ul></ul>
        <form onSubmit={handleSubmit}>
          <input type='text' value={todoValue} onChange={onChange} />
          <input type='submit' />
        </form>
      </div>
      <div>
        <div>{value.counter}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
