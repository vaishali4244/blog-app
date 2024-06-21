import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const userInputFunc = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login-form">
          <p className="form-error-msg">This is an error</p>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData?.email}
            onChange={userInputFunc}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData?.password}
            onChange={userInputFunc}
          />

          <button type="submit" className="btn primary">
            {" "}
            Login
          </button>
          <small>
            Don't have an account? <Link to="/register"> Sign Up</Link>
          </small>
        </form>
      </div>
    </section>
  );
};

export default Login;
