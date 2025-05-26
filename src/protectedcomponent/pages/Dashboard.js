import React from "react";
import { useAuth } from "../../AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1> Dashboard (Protected)</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
