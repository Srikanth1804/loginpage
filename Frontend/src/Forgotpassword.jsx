import React, { useState } from "react";
import Axios from "axios";
const Forgotpassword = () => {
  let [email, setemail] = useState("");

  let Handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);

    Axios.post("http://localhost:4000/api/forgot-password", { email })

      .then((res) => {
        console.log(res.data);

        alert(res.data.msg);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Forgot Password!</h1>
      <form onSubmit={Handlesubmit}>
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

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
