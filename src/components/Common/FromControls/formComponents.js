import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";

const ErrorDiv = styled.div`
  margin-top: 0.5rem;
  color: #975057;
  padding: 0.5rem 1rem;
  text-align: center;
`;
const StyledInput = styled.input`
  border: ${(props) => (props.hasError ? `2px solid red` : undefined)};
  outline: none,
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  &:focus {
    outline: none;
  };
`;

export const myInput = ({
  input,
  meta: { error, touched },
  type,
  placeholder,
}) => {
  const hasError = error && touched;
  return (
    <div>
      <StyledInput
        {...input}
        type={type}
        placeholder={placeholder}
        hasError={hasError}
        className="form-control"
      />
      {hasError && (
        <ErrorDiv className="alert alert-danger" role="alert">
          {error}
        </ErrorDiv>
      )}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  type,
  validators,
  component,
  text = null
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        type={type}
        validate={validators}
        component={component}
      />
      {text}
    </div>
  );
};
