import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [pwd, setpwd] = useState("");
  let navigate = useNavigate();

  let Handlesubmit = (e) => {
    e.preventDefault();

    let Data = {
      name,
      email,
      pwd,
    };

    Axios.post("http://localhost:4000/api/register", Data)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((e) => {
        console.log(e);
        alert(res.data.msg);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Register Page!</h1>
      <form action="/action_page.php" onSubmit={Handlesubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            required
            onChange={(e) => setname(e.target.value)}
          />
        </div>
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
        Have an account <Link to="/login">Login?</Link>
      </p>
    </div>
  );
};

export default Register;
