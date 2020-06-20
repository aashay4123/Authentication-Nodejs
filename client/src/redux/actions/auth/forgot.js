import * as actionTypes from "../actionTypes";
import { axiosInstance as axios } from "../../../utility";

//Forgot Actions
export const forgotFailed = (err) => {
  let error;
  if (err.response && err.response.data.error) {
    error = err.response.data.error;
  }
  return {
    type: actionTypes.FORGOT_FAILED,
    error: error,
  };
};

export const forgotSuccess = (response) => {
  return {
    type: actionTypes.FORGOT_SUCCESS,
    toastMessage: response.data.message,
  };
};

export const forgot = (email) => {
  return (dispatch) => {
    axios
      .put("/forgot-password", { email })
      .then((response) => {
        dispatch(forgotSuccess(response));
      })
      .catch((error) => {
        dispatch(forgotFailed(error));
      });
  };
};

//Reset Actions

export const resetFailed = (err) => {
  let error;
  if (err.response && err.response.data.error) {
    error = err.response.data.error;
  }
  return {
    type: actionTypes.RESET_FAILED,
    error: error,
  };
};

export const resetSuccess = (response) => {
  return {
    type: actionTypes.RESET_SUCCESS,
    toastMessage: response.data.message,
  };
};

export const reset = (newPassword, token) => {
  return (dispatch) => {
    axios
      .put("/reset-password", { newPassword, resetPasswordLink: token })
      .then((response) => {
        dispatch(resetSuccess(response));
      })
      .catch((error) => {
        dispatch(resetFailed(error));
      });
  };
};
