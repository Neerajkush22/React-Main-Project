
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './login.css'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const homepageHandler = () => {
    // if (email.length === 0 || password.length === 0) {
    //   alert("Inputs must not be empty!!");
    //   return;
    // } else if (email.includes("@")) {
    //     props.setLogIn(true);
    //     history.push("/")
    // } else {
    //   alert("Email or password not valid");
    const users = []

    const keys = Object.keys(window.localStorage)
    for (let key of keys){
      if(key!=="User"){
        users.push(JSON.parse(window.localStorage.getItem(key)))
      }
     
    }

    if (email.length === 0 || password.length === 0) {
      alert("Inputs must not be empty!!");
      return;
    } else {
      for (let i in users){
        if (users[i].email === email  && users[i].password===password){
          alert("Logged in Successfull")
          props.setLogIn(true)
          history.push("/")
          return
        }  
      }
      alert("email or password is not Valid")
      return
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
        <button className="button1"><Link to="/register" style={{color: "white"}}>Register</Link></button>
        <span className="spn">Forgot password?</span>
      </div>
    </div>
  );
};
export default Login;
