import * as actionTypes from "../actionTypes";
import { axiosInstance as axios } from "../../../utility";

//facebook Actions
export const facebookFailed = () => {
  return {
    type: actionTypes.FACEBOOK_FAILED,
  };
};

export const facebookSuccess = () => {
  return {
    type: actionTypes.FACEBOOK_SUCCESS,
  };
};

export const facebook = (response, informParent) => {
  return (dispatch) => {
    axios
      .post("/facebook-login", {
        userID: response.userID,
        accessToken: response.accessToken,
      })
      .then((response) => {
        dispatch(facebookSuccess());
        informParent(response);
      })
      .catch((_) => {
        dispatch(facebookFailed());
      });
  };
};

//google Actions

export const googleFailed = () => {
  return {
    type: actionTypes.GOOGLE_FAILED,
  };
};

export const googleSuccess = () => {
  return {
    type: actionTypes.GOOGLE_SUCCESS,
  };
};

export const google = (response, informParent) => {
  return (dispatch) => {
    axios
      .post("/google-login", { idToken: response.tokenId })
      .then((response) => {
        dispatch(googleSuccess());
        informParent(response);
      })
      .catch((error) => {
        dispatch(googleFailed());
      });
  };
};
