import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  token: "",
  error: false,
};

const accountActivationFailed = (state, action) => {
  console.log("error", action.error);
  toast.error(action.error);
  return updateObject(state, { error: true });
};
const accountActivationsuccess = (state, action) => {
  console.log("success", action.toastMessage);
  toast.success(action.toastMessage);
  return updateObject(state, { error: false });
};
const updateNameToken = (state, action) => {
  return updateObject(state, {
    name: action.name,
    token: action.token,
  });
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_ACTIVATION_SUCCESS:
      return accountActivationsuccess(state, action);

    case actionTypes.ACCOUNT_ACTIVATION_FAILED:
      return accountActivationFailed(state, action);

    case actionTypes.UPDATE_NAME_TOKEN:
      return updateNameToken(state, action);

    default:
      return state;
  }
};

export default Reducer;
