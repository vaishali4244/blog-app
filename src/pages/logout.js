import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <section className="logout">
      <small className="center">
        You have been logged out. Click Here to{" "}
        <Link to="/login"> Sign In</Link>
      </small>
    </section>
  );
};

export default Logout;
