import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
const URL = require("../config").REACT_APP_API;
const googleClient = require("../config").REACT_APP_GOOGLE_CLIENT_ID;

const Google = ({ informParent = (f) => f }) => {
  const responseGoogle = (response) => {
    axios({
      method: "POST",
      url: `${URL}/google-login`,
      data: { idToken: response.tokenId },
    })
      .then((response) => {
        console.log("GOOGLE SIGNIN SUCCESS", response);
        informParent(response);
      })
      .catch((err) => {
        console.log("GOOGLE SIGNIN ERROR", err.response);
      });
  };
  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${googleClient}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn btn-success btn-lg btn-block"
          >
            <i className="fab fa-google pr-2"></i> Login with Google
          </button>
        )}
      />
    </div>
  );
};

export default Google;
