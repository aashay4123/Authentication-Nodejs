import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  token: "",
  error: "",
};

const accountActivationFailed = (state, action) => {
  toast.error(action.error);
  return updateObject(state, { error: action.error });
};
const accountActivationsuccess = (state, action) => {
  toast.success(action.toastMessage);
  return updateObject(state, { error: action.toastMessage });
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
