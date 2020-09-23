import React from "react";
import { connect } from "react-redux";
import { LoginReduxForm } from "./LoginForm";
import { loginThunk, logoutThunk } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import { isAuthSelector } from "../../redux/selectors/login-selectors";
import styled from "styled-components";

const HeadingLogin = styled.form`
  font-size: 2em;
  font-weight: bold;
  padding: 0 0 0.5rem 1rem;
`;

const Login = ({ loginThunk, isAuth }) => {
  const onSubmit = (values) => {
    loginThunk(values.email, values.password, values.rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <HeadingLogin>Login please</HeadingLogin>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: isAuthSelector(state),
});

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Login);
