import * as aT from "../actions/actionTypes";
import * as authA from "./auth";
const initialState = {
  email: "",
  name: "",
  token: "",
  error: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    //sign_in Reducer
    case aT.SIGNIN_SUCCESS:
      return authA.signinSuccess(state, action);
    case aT.SIGNIN_FAILED:
      return authA.signinFailed(state, action);

    //sign_up Reducer
    case aT.SIGNUP_SUCCESS:
      return authA.signupSuccess(state, action);
    case aT.SIGNUP_FAILED:
      return authA.signupFailed(state, action);

    //Activate Reducer
    case aT.ACCOUNT_ACTIVATION_SUCCESS:
      return authA.accAsuccess(state, action);
    case aT.ACCOUNT_ACTIVATION_FAILED:
      return authA.accAFailed(state, action);
    case aT.UPDATE_NAME_TOKEN:
      return authA.updateNameToken(state, action);

    //Forgot Reducer
    case aT.FORGOT_SUCCESS:
      return authA.forgotsuccess(state, action);
    case aT.FORGOT_FAILED:
      return authA.forgotFailed(state, action);

    //Reset Reducer
    case aT.RESET_SUCCESS:
      return authA.resetsuccess(state, action);
    case aT.RESET_FAILED:
      return authA.resetFailed(state, action);

    //Facebook Reducer
    case aT.FACEBOOK_SUCCESS:
      return authA.facebookSuccess(state, action);
    case aT.FACEBOOK_FAILED:
      return authA.facebookFailed(state, action);

    //Google Reducer
    case aT.GOOGLE_SUCCESS:
      return authA.googleSuccess(state, action);
    case aT.GOOGLE_FAILED:
      return authA.googleFailed(state, action);
    default:
      return state;
  }
};

export default Reducer;
