import React from "react";
import { reduxForm } from "redux-form";
import { myInput, createField } from "../Common/FromControls/formComponents";
import {
  required,
  maxLength,
  email,
  passwordInput,
} from "../../utils/validation";
import styled from "styled-components";

const inputLength = maxLength(30);

const FormLogin = styled.form`
  width: 15rem;
  padding: 0 1rem;
`;
const ButtonLogin = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 0.2rem 0;
  margin-top: 0.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  outline: none;
  &:focus {
    outline: none;
  }
`;
const DivApiError = styled.div`
  color: red;
  margin: 4px;
  border: 1px solid red;
  padding: 0 4px;
`;

const loginForm = ({ handleSubmit, error }) => {
  return (
    <FormLogin onSubmit={handleSubmit}>
      {createField(
        "Email",
        "email",
        "text",
        [required, inputLength, email],
        myInput
      )}

      {createField(
        "Password",
        "password",
        "password",
        [required, inputLength, passwordInput],
        myInput
      )}

      {createField(null, "rememberMe", "checkbox", [], "input", " Remember me")}
      {error && <DivApiError>{error}</DivApiError>}
      <ButtonLogin className="btn btn-warning" type="submit">
        Login
      </ButtonLogin>
    </FormLogin>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(loginForm);
