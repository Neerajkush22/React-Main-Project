
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './login.css'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const homepageHandler = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Inputs must not be empty!!");
      return;
    } else if (email.includes("@")) {
        props.setLogIn(true);
        history.push("/")
    } else {
      alert("Email or password not valid");
    }
  };

  return (
    <div className="logcontainer">
      <div className="login-container">
        <div className="login-logo">
          <h1>FrequentGrooming</h1>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button1" onClick={homepageHandler}>Log in</button>
        <span className="spn">Forgot password?</span>
      </div>
    </div>
  );
};
export default Login;
