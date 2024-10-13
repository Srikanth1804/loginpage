import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Resetpassword = () => {
  let [pwd, setpwd] = useState("");

  let { id, token } = useParams();

  let navigate = useNavigate();

  let Handlesubmit = (e) => {
    e.preventDefault();
    console.log(pwd);
    console.log(id);
    console.log(token);

    Axios.put(`http://localhost:4000/api/reset-password/${id}/${token}`, {
      pwd,
    })

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
      <h1>Reset Password!</h1>
      <form action="/action_page.php" onSubmit={Handlesubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="password" className="form-label">
            New Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter New Password"
            name="password"
            required
            onChange={(e) => setpwd(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Resetpassword;
