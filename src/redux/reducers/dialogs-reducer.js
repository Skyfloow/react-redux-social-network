import { ADD_MESSAGE } from "../action-const";

let initialState = {
  dialogs: [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Object.keys(state.messages).length + 1,
            message: action.MessageBody,
          },
        ],
        dialogs: [
          ...state.dialogs,
          {
            id: Object.keys(state.dialogs).length + 1,
            name: action.MessageName,
          },
        ],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (MessageBody, MessageName) => ({
  type: ADD_MESSAGE,
  MessageBody,
  MessageName,
});

export default dialogsReducer;
