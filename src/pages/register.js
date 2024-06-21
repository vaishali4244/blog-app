import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const userInputFunc = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register-form">
          <p className="form-error-msg">This is an error</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData?.name}
            onChange={userInputFunc}
            autoFocus
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData?.email}
            onChange={userInputFunc}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData?.password}
            onChange={userInputFunc}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData?.password2}
            onChange={userInputFunc}
          />
          <button type="submit" className="btn primary">
            {" "}
            Register
          </button>
          <small>
            Already have an account? <Link to="/login"> Click Here</Link>
          </small>
        </form>
      </div>
    </section>
  );
};

export default Register;
