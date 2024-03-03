import React, { useState, useEffect } from "react";

const Todo = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [username, setUsername] = useState("");

  const TODO_KEY = "toDos";

  //로컬스토리지에 저장된 to do list가져와 -> toDos[] 배열에 담음
  useEffect(() => {
    const savedToDos = localStorage.getItem(TODO_KEY);
    if (savedToDos !== null) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername); // 로컬 스토리지에서 사용자 이름을 가져와 상태에 설정
    }
  }, []);

  const handleToDoSubmit = (e) => {
    e.preventDefault();

    const newTodoObj = {
      text: newToDo,
      id: Date.now(),
    };

    setToDos([...toDos, newTodoObj]);
    setNewToDo("");

    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
  };

  // toDos[]의 상태가 변경될때마다, 로컬스토리지에 to do list 저장
  // useEffect(() => {
  //   localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
  // }, [toDos]);

  const deleteToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <div className="center whiteText">
      <h1 id="greeting">Hello! {username}</h1>
      <form onSubmit={handleToDoSubmit}>
        <input
          type="text"
          placeholder="Write your To Do here"
          required
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </form>

      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => deleteToDo(toDo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
