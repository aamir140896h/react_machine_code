import React, { useEffect } from "react";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Fake Login</button>
    </div>
  );
};

export default Login;
