import { INITIALIZED_SUCCESS } from "../action-const";
import { getProfileThunk } from "./auth-reducer";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeAppThunk = () => async (dispatch) => {
  await dispatch(getProfileThunk());
  dispatch(initializedSuccess());
};

export default appReducer;
