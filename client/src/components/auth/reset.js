import React, { useState, useEffect } from "react";
import Layout from "../../container/layout";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Reset = (props) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password Reset Link",
  });
  useEffect(() => {
    let token = props.match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
    // eslint-disable-next-line
  }, []);
  const { name, token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Reseting password" });
    props.onReset(newPassword, token);
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
        <h1 className="p-5 text-center">hey {name}, enter new password</h1>
        {ResetPasswordForm()}
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReset: (newPassword, token) =>
      dispatch(actions.reset(newPassword, token)),
  };
};

export default connect(null, mapDispatchToProps)(Reset);
