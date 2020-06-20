import { updateObject } from "../../../utility";
import { toast } from "react-toastify";

//sign_in

export const signinFailed = (state, action) => {
  toast.error(action.error);
  return updateObject(state, { error: true });
};
export const signinSuccess = (state, action) => {
  toast.success(action.response.data.message);
  return updateObject(state, { error: false });
};

//sign_up
export const signupFailed = (state, action) => {
  toast.error(action.error);
  return updateObject(state, { error: true });
};
export const signupSuccess = (state, action) => {
  toast.success(action.response.data.message);
  return updateObject(state, { error: false });
};

//Account Activation
export const accAFailed = (state, action) => {
  toast.error(action.error);
  return updateObject(state, { error: true });
};
export const accAsuccess = (state, action) => {
  toast.success(action.toastMessage);
  return updateObject(state, { error: false });
};
export const updateNameToken = (state, action) => {
  return updateObject(state, {
    name: action.name,
    token: action.token,
  });
};
