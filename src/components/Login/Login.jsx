import React from "react";
import { connect } from "react-redux";
import { LoginReduxForm } from "./LoginForm";
import { loginThunk, logoutThunk } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import { isAuthSelector, isCaptchaUrlSelector } from "../../redux/selectors/login-selectors";
import styled from "styled-components";

const HeadingLogin = styled.form`
  font-size: 2em;
  font-weight: bold;
  padding: 0 0 0.5rem 1rem;
`;

const Login = ({ loginThunk, isAuth, isCaptchaUrl }) => {
  const onSubmit = (values) => {
    loginThunk(values.email, values.password, values.rememberMe, values.captcha);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <HeadingLogin>Login please</HeadingLogin>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={isCaptchaUrl}/>
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: isAuthSelector(state),
  isCaptchaUrl: isCaptchaUrlSelector(state)
});

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Login);
