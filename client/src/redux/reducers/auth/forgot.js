import { updateObject } from "../../../utility";
import { toast } from "react-toastify";

// Forgot Password

export const forgotFailed = (state, action) => {
  toast.error(action.error);
  return updateObject(state, { error: true });
};

export const forgotsuccess = (state, action) => {
  toast.success(action.toastMessage);
  return updateObject(state, { error: false });
};

// Reset Account
export const resetFailed = (state, action) => {
  toast.error(action.error);
  return updateObject(state, { error: true });
};

export const resetsuccess = (state, action) => {
  toast.success(action.toastMessage);
  return updateObject(state, { error: false });
};
