import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  loadState,
} from "./stores/todoSlice";

function App() {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch(loadState(savedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTodos(todos);
    } else if (filter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else if (filter === "uncompleted") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, filter]);

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

  // 필터링 함수
  const handleFiltered = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
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

      <select value={filter} onChange={handleFiltered}>
        <option value='all'>전체보기</option>
        <option value='completed'>완료</option>
        <option value='uncompleted'>미완료</option>
      </select>

      <ul>
        {filteredTodos.map((todo, index) => (
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
                  checked={todo.completed}
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
