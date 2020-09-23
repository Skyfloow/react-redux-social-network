import React from "react";
import { reduxForm } from "redux-form";
import { myInput, createField } from "../Common/FromControls/formComponents";
import { required, maxLength } from "../../utils/validation";
import styled from "styled-components";

const maxLengthInput = maxLength(50);

const ButtonAddPost = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 0.2rem 2rem;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const FormMessage = styled.form`
  width: 15rem;
  padding: 0 1rem;
`;

const MessageForm = ({ handleSubmit }) => {
  return (
    <FormMessage onSubmit={handleSubmit}>
      <div>
        {createField(
          "Enter your Name",
          "MessageName",
          "text",
          [required, maxLengthInput],
          myInput
        )}
      </div>
      <div>
        {createField(
          "Enter your message",
          "MessageBody",
          "text",
          [required, maxLengthInput],
          myInput
        )}
      </div>
      <ButtonAddPost type="submit" className="btn btn-light">
        Add post
      </ButtonAddPost>
    </FormMessage>
  );
};

export const MessagesReduxForm = reduxForm({
  form: "Dialogs",
})(MessageForm);
