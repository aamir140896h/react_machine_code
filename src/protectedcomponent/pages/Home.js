import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
