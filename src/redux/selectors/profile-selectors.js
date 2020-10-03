export const getProfileSelector = (state) => {
  return state.profilePage.userProfile;
};

export const getStatusSelector = (state) => {
  return state.profilePage.status;
};

export const getAuthorizedIdSelector = (state) => {
  return state.authUserData.id;
};

export const getMyPostsSelector = (state) => {
  return state.profilePage.posts;
};

export const getUploadPhotoStatusSelector = (state) => {
  return state.profilePage.uploadPhotoStatus;
};
