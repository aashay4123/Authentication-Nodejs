import React, { useState } from "react";
import Layout from "../core/layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const URL = process.env.REACT_APP_API;

const Forgot = () => {
  const [values, setValues] = useState({
    email: "",
    buttonText: "Request Password Reset Link",
  });
  const { email, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Requesting password" });
    axios({
      method: "PUT",
      url: `${URL}/forgot-password`,
      data: { email },
    })
      .then((response) => {
        console.log("FORGOT PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Requested" });
      })
      .catch((error) => {
        console.log("FORGOT PASSWORD ERROR", error);
        setValues({ ...values, buttonText: "Request Failed" });
        toast.error(error.response.data.error);
      });
  };

  const passwordForgotForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">email</label>
        <input
          onChange={handleChange("email")}
          type="text"
          value={email}
          className="form-control"
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
        <h1 className="p-5 text-center">Forgot password</h1>
        {passwordForgotForm()}
      </div>
    </Layout>
  );
};

export default Forgot;
