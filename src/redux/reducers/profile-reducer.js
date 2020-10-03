import {
  ADD_POST,
  SET_USER_PROFILE,
  SET_USER_STATUS,
  SAVE_PHOTO_SUCCESS,
  UPLOAD_PHOTO_STATUS,
} from "../action-const";
import { profileAPI } from "../../api/api";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 10 },
    { id: 4, message: "Dada", likesCount: 9 },
  ],
  userProfile: null,
  status: "",
  uploadPhotoStatus: false,
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };
    case UPLOAD_PHOTO_STATUS:
      return {
        ...state,
        uploadPhotoStatus: action.uploadStatus,
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
export const savePhotoSucess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const uploadStatusPhoto = (uploadStatus) => ({
  type: UPLOAD_PHOTO_STATUS,
  uploadStatus,
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

export const saveProfilePhotoThunk = (photo) => async (dispatch) => {
  dispatch(uploadStatusPhoto(true));
  const response = await profileAPI.savePhoto(photo);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSucess(response.data.data.photos));
    dispatch(uploadStatusPhoto(false));
  }
};

export default profileReducer;
