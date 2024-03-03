import "./css/App.css";
import Login from "./js/Login";
import Clock from "./js/Clock";
import Background from "./js/Background";
import Todo from "./js/todo";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <div>
      <Background />
      <Clock />
      
      {username ? <Todo /> :<Login />}
      
    </div>
  );
}

export default App;
