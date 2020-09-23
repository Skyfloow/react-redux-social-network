import React from "react";
import { reduxForm } from "redux-form";
import { myInput, createField } from "../../Common/FromControls/formComponents";
import { required, maxLength } from "../../../utils/validation";
import styled from "styled-components";

const maxLengthInput = maxLength(50);

const FormContainer = styled.form`
  width: 15rem;
`;
const ButtonSubmit = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.2rem 2rem;
  outline: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

const PostForm = ({ handleSubmit }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      {createField(
        "Enter text",
        "myPosts",
        "text",
        [required, maxLengthInput],
        myInput
      )}
      <ButtonSubmit type="submit" className="btn btn-light">
        Add
      </ButtonSubmit>
    </FormContainer>
  );
};

export const PostsReduxForm = reduxForm({
  form: "MyPosts",
})(PostForm);
