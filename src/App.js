import "./css/App.css";
import Login from "./js/Login";
import Clock from "./js/Clock";
import Background from "./js/Background";
import Todo from "./js/todo";
import { useState, useEffect } from "react";
import Quote from "./js/Quote";
import Weather from "./js/Weather";


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
      <Weather />
      <Clock />
      {username ? <Todo /> :<Login />}
      <Quote />
    </div>
  );
}

export default App;
