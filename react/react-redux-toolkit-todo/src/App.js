import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "./stores/todoSlice";

function App() {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // todo 등록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo(text));
    }
    setText("");
  };

  // 삭제 함수
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // 수정 시작 함수
  const handleEditStart = (id, text) => {
    setEditId(id);
    setEditText("");
  };

  // 수정 취소 함수
  const handleEditCancel = () => {
    setEditId(null);
    setEditText("");
  };

  // 수정 완료 함수
  const handleEditSave = () => {
    if (editText.trim() !== "") {
      dispatch(editTodo({ id: editId, text: editText }));
      setEditId(null);
    } else {
      handleEditCancel();
    }
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>추가</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.id === editId ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleEditSave}>저장</button>
                <button onClick={handleEditCancel}>취소</button>
              </>
            ) : (
              <>
                <input
                  type='checkbox'
                  checked={todo.complated}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span>{todo.text}</span>
                <button onClick={() => handleEditStart(todo.id, todo.text)}>
                  수정
                </button>
                <button onClick={() => handleDelete(todo.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
