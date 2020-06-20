import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../container/layout";
import Google from "./google";
import { authenticate, isAuth } from "../helper";
import { toast } from "react-toastify";
import Facebook from "./facebook";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Signin = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { email, password, buttonText } = values;

  const informParent = (response) => {
    authenticate(response, () => {
      setValues({
        ...values,
        email: "",
        password: "",
        buttonText: "submitted",
      });
      toast.success(`hey ${response.data.user.name} welcome back!!`);
      isAuth() && isAuth().role === "admin"
        ? props.history.push("/admin")
        : props.history.push("/private");
    });
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "submitting" });
    props.onSignin(email, password, informParent);
  };

  const signinForm = () => (
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
        <h1 className="p-5 text-center">Signin</h1>
        <Google informParent={informParent} />
        <Facebook informParent={informParent} />
        <p className="lead text-center">OR</p>
        {signinForm()}
        <br />
        <Link
          to="/auth/password/forgot"
          className="btn btn-sm btn-outline-danger"
        >
          Forgot Password
        </Link>
      </div>
    </Layout>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignin: (email, password, informParent) =>
      dispatch(actions.signin(email, password, informParent)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
