import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './login.css';

function RegisterForm() {
  const initialValues = { username: "", email: "", password: "" };
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem(("User-" + userName), JSON.stringify({ username: userName, email: email, password: password }))
    setUsername("")
    setPassword("")
    setEmail("")
    history.replace("/")

  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {

    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!PWD_REGEX.test(values.password)) {
      errors.password = "Password is not valid format!";
    }
    return errors;
  };
  return (
    <>
      <div className="logcontainer">
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div class="content">
              <div class="input-field">
                <input
                  name="username"
                  placeholder="Username"
                  value={userName}
                  autocomplete="off"
                  required
                  onChange={(e) => setUsername(e.target.value)}

                />
              </div>
              <p>{formErrors.username}</p>
              <div class="input-field">

                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p>{formErrors.email}</p>
              <div class="input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="off"
                  required
                />
              </div>
              <p>{formErrors.password}</p>
            </div>
            <div class="action">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;