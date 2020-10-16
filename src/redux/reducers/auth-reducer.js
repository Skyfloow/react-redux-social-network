import { SET_AUTH_ME_DATA, SET_AUTH_ME_CAPTCHA } from "../action-const";
import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ME_DATA: {
      return { ...state, ...action.data };
    }
    case SET_AUTH_ME_CAPTCHA: {
      return { ...state, captchaUrl: action.payload };
    }
    default:
      return state;
  }
};

export const getCaptchaUrl = (captchaUrl) => ({
  type: SET_AUTH_ME_CAPTCHA,
  payload: captchaUrl,
});

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

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.resultCode === 0) {
    dispatch(getProfileThunk());
  } else {

    if(response.resultCode === 10) {
      dispatch(getCaptchaUrlThunk());
    }
    dispatch(stopSubmit("login", { _error: response.messages[0] }));
  }
};

export const getCaptchaUrlThunk = () => async (dispatch) => {
  const response = await authAPI.captcha();
  const captchaUrl = response.url;

  dispatch(getCaptchaUrl(captchaUrl));
};

export const logoutThunk = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
    window.location.reload();
  }
};

export default usersReducer;
