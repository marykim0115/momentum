import React from "react";

const Login = () => {
  /*
  const [username, setUsername] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const USERNAME_KEY = "username";

  useEffect(() => {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername) {
      //localStorage에 username의 값이 있으면
      setUsername(savedUsername);
      setIsVisible(true);
    } else {
      //localStorage에 username의 값이 없으면
      setIsVisible(false);
    }
  }, []);
*/

  const handleLoginSubmit = (event) => {
    const username = event.target.elements.username.value.trim();
    localStorage.setItem("username", username);
  };

  return (
    <div>
      <form
        id="login-form"
        className="whiteText center"
        onSubmit={handleLoginSubmit}
      >
        <h1>Hello! What's your name?</h1>
        <input type="text" name="username" required maxLength="15" />
        <span>
          Please enter your first name or the name you prefer to be called.
        </span>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Login;
