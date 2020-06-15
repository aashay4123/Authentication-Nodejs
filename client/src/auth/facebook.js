import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
const URL = require("../config").REACT_APP_API;

const facebookID = require("../config").REACT_APP_FACEBOOK_ID;
const Facebook = ({ informParent = (f) => f }) => {
  const responseFacebook = (response) => {
    console.log("FACEBOOK RESPONSE", response);
    axios({
      method: "POST",
      url: `${URL}/facebook-login`,
      data: { userID: response.userID, accessToken: response.accessToken },
    })
      .then((response) => {
        console.log("facebook SIGNIN SUCCESS", response);
        informParent(response);
      })
      .catch((err) => {
        console.log("facebook SIGNIN ERROR", err.response);
      });
  };
  return (
    <div className="pb-3">
      <FacebookLogin
        appId={`${facebookID}`}
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btn btn-primary btn-lg btn-block"
          >
            <i className="fab fa-facebook pr-2"></i> Login with Facebook
          </button>
        )}
      />
      ,
    </div>
  );
};

export default Facebook;
