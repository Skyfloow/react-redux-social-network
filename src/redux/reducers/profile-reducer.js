import { ADD_POST, SET_USER_PROFILE, SET_USER_STATUS } from "../action-const";
import { profileAPI } from "../../Api/api";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 10 },
    { id: 4, message: "Dada", likesCount: 9 },
  ],
  userProfile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Object.keys(state.posts).length + 1,
            message: action.newText,
            likesCount: 7,
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.userStatus,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (text) => ({
  type: ADD_POST,
  newText: text,
});
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
export const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS,
  userStatus,
});

export const getUserProfileThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserId(userId);
  dispatch(setUserProfile(response));
};

export const setStatusProfileThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
};

export const updateStatusProfileThunk = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
