import { createSelector } from "reselect";
import { getAuthDataSelector } from "./header-selectors";

export const isAuthSelector = createSelector(
  getAuthDataSelector,
  (authUserData) => {
    return authUserData.isAuth;
  }
);

export const isCaptchaUrlSelector = createSelector(
  getAuthDataSelector,
  (authUserData) => {
    return authUserData.captchaUrl;
  }
);