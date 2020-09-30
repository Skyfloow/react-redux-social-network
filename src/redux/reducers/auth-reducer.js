import { SET_AUTH_ME_DATA } from "../action-const";
import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ME_DATA: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};

export const setUserData = (id, login, email, isAuth = true) => ({
  type: SET_AUTH_ME_DATA,
  data: { ...id, ...login, ...email, isAuth },
});

export const getProfileThunk = () => async (dispatch) => {
  const response = await authAPI.isAuth();

  if (response.resultCode === 0) {
    dispatch(setUserData(response.data));
  }
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(getProfileThunk());
  } else {
    dispatch(stopSubmit("login", { _error: response.messages[0] }));
  }
};

export const logoutThunk = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
    window.location.reload();
  }
};

export default usersReducer;
