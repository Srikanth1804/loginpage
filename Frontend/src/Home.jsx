import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Remove token from localStorage (or sessionStorage)
    localStorage.removeItem("token");

    // Redirect to the login page

    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
