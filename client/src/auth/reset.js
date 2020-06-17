import React, { useState, useEffect } from "react";
import Layout from "../core/layout";
import jwt from "jsonwebtoken";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const URL = process.env.REACT_APP_API;

const Reset = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password Reset Link",
  });
  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);
  const { name, token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Reseting password" });
    axios({
      method: "PUT",
      url: `${URL}/reset-password`,
      data: { newPassword, resetPasswordLink: token },
    })
      .then((response) => {
        console.log("Reset PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Reset Completed" });
      })
      .catch((error) => {
        console.log("Reset PASSWORD ERROR", error);
        setValues({ ...values, buttonText: "Reset Failed" });
        toast.error(error.response.data.error);
      });
  };

  const ResetPasswordForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">New Password</label>
        <input
          onChange={handleChange}
          type="password"
          value={newPassword}
          className="form-control"
          placeholder="Type new password"
          required
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-med-3">
        <ToastContainer />
        <h1 className="p-5 text-center">hey {name}, enter new password</h1>
        {ResetPasswordForm()}
      </div>
    </Layout>
  );
};

export default Reset;
