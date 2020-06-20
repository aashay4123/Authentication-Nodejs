import * as actionTypes from "./actionTypes";
import { axiosInstance as axios } from "../../utility";

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
    axios({
      method: "POST",
      url: `/account_activate`,
      data: { token },
    })
      .then((response) => {
        dispatch(accountActivationSuccess(response.data.message));
      })
      .catch((error) => {
        dispatch(accountActivationFailed(error.response.data.error));
      });
  };
};
