import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { MessagesReduxForm } from "./DialogsForm";
import styled from "styled-components";

const DivMessagesContainer = styled.div`
  display: flex;
  padding: 1rem;
`;
const DivDialogItems = styled.div`
  color: white;
  .active {
    color: gold;
  }
`;
const DivMessages = styled.div`
  padding-left: 1rem;
  .message {
    color: white;
  }
`;

const Dialogs = ({ dialogsPage, addMessage }) => {
  const state = dialogsPage;

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  const messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addPost = ({ MessageBody, MessageName }) => {
    addMessage(MessageBody, MessageName);
  };

  return (
    <div>
      <DivMessagesContainer>
        <DivDialogItems>{dialogsElements}</DivDialogItems>
        <DivMessages>{messagesElements}</DivMessages>
      </DivMessagesContainer>
      <MessagesReduxForm onSubmit={addPost} />
    </div>
  );
};

export default Dialogs;
