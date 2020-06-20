import React, { useEffect } from "react";
import Layout from "../../container/layout";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import * as actions from "../../redux/actions";

const Activate = (props) => {
  useEffect(() => {
    let token = props.match.params.token;
    let { name } = jwt.decode(token);
    if (token && name) {
      props.onUpdateNameToken(name, token); // change
    }
  }, []);
  const { token, name } = props;
  console.log(token);
  const clickSubmit = (event) => {
    event.preventDefault();
    props.onAccountActivation(props.token); //change
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
      <button className="btn btn-outline-primary" onClick={clickSubmit}>
        Activate Account
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">{activationLink()}</div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    token: state.auth.token,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAccountActivation: (token) => dispatch(actions.accountActivation(token)),
    onUpdateNameToken: (name, token) =>
      dispatch(actions.updateNameToken(name, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activate);
