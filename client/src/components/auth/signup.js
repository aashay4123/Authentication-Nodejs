import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../container/layout";
import { isAuth } from "../helper";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Signup = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "submitting" });
    props.onSignup(name, email, password);
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          value={name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">email</label>
        <input
          onChange={handleChange("email")}
          type="text"
          value={email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
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
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="p-5 text-center">Signup</h1>
        {signupForm()}
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (email, password, informParent) =>
      dispatch(actions.signup(email, password, informParent)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
