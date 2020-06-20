// Services
import { updateObject } from "../../../utility";

// facebook Password
export const facebookFailed = (state, _) => {
  return updateObject(state, { error: true });
};

export const facebookSuccess = (state, _) => {
  return updateObject(state, { error: false });
};

// google Account
export const googleFailed = (state, _) => {
  return updateObject(state, { error: true });
};

export const googleSuccess = (state, _) => {
  return updateObject(state, { error: false });
};
