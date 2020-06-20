import * as actionTypes from "../actionTypes";
import { axiosInstance as axios } from "../../../utility";

// Account Activation Actions
export const updateNameToken = (name, token) => {
  return {
    type: actionTypes.UPDATE_NAME_TOKEN,
    name: name,
    token: token,
  };
};

export const accountActivationFailed = (err) => {
  return {
    type: actionTypes.ACCOUNT_ACTIVATION_FAILED,
    error: err,
  };
};

export const accountActivationSuccess = (toastMessage) => {
  console.log("success", toastMessage);

  return {
    type: actionTypes.ACCOUNT_ACTIVATION_SUCCESS,
    toastMessage: toastMessage,
  };
};

export const accountActivation = (token) => {
  return (dispatch) => {
    axios
      .post("/account_activate", { token })
      .then((response) => {
        dispatch(accountActivationSuccess(response.data.message));
      })
      .catch((error) => {
        dispatch(accountActivationFailed(error.response.data.error));
      });
  };
};

// Sign in Actions
export const signinFailed = (err) => {
  let error;
  if (err.response && err.response.data.error) {
    error = err.response.data.error;
  }
  return {
    type: actionTypes.SIGNIN_FAILED,
    error: error,
  };
};

export const signinSuccess = (response) => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    response: response,
  };
};

export const signin = (email, password, informParent) => {
  return (dispatch) => {
    axios
      .post("/signin", { email, password })
      .then((response) => {
        dispatch(signinSuccess(response));
        informParent(response);
      })
      .catch((error) => {
        dispatch(signinFailed(error));
      });
  };
};

// Sign up Actions

export const signupFailed = (err) => {
  let error;
  if (err.response && err.response.data.error) {
    error = err.response.data.error;
  }
  return {
    type: actionTypes.SIGNUP_FAILED,
    error: error,
  };
};

export const signupSuccess = (response) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    response: response,
  };
};

export const signup = (name, email, password) => {
  return (dispatch) => {
    axios
      .post("/signup", { name, email, password })
      .then((response) => {
        dispatch(signupSuccess(response));
      })
      .catch((error) => {
        dispatch(signupFailed(error));
      });
  };
};
