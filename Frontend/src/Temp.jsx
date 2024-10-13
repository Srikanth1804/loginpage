import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import Forgotpassword from "./Forgotpassword";
import Resetpassword from "./Resetpassword";
const Temp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<Forgotpassword />}></Route>
          <Route
            path="/reset-password/:id/:token"
            element={<Resetpassword />}
          ></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                {" "}
                <Home />{" "}
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Temp;
