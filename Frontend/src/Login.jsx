import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  let [email, setemail] = useState("");
  let [pwd, setpwd] = useState("");
  let Navigate = useNavigate();

  let Handlesubmit = (e) => {
    e.preventDefault();

    let Data = {
      email,
      pwd,
    };

    Axios.post("http://localhost:4000/api/login", Data).then((res) => {
      if (res.data.status) {
        console.log("Token:", res.data.token);
        localStorage.setItem("token", res.data.token);
        Navigate("/home");
      } else {
        alert(res.data.msg);
      }
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login Page!</h1>
      <form action="/action_page.php" onSubmit={Handlesubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            required
            onChange={(e) => setpwd(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
      <p>
        Have don't account <Link to="/">Signup?</Link>
      </p>
    </div>
  );
};

export default Login;
