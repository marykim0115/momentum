import "./css/App.css";
import Login from "./js/Login";
import Clock from "./js/Clock";
import Background from "./js/background";

function App() {
  return (
    <div>
      <Background />
      <Clock />
      <Login />
    </div>
  );
}

export default App;
