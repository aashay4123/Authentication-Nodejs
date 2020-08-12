import React, { useState } from "react";
import Layout from "../../container/layout";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Forgot = (props) => {
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
    props.onforgot(email);
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
        <h1 className="p-5 text-center">Forgot password</h1>
        {passwordForgotForm()}
      </div>
    </Layout>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onforgot: (email) => dispatch(actions.forgot(email)),
  };
};

export default connect(null, mapDispatchToProps)(Forgot);
