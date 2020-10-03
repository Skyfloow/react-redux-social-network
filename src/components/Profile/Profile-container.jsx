import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfileThunk,
  setStatusProfileThunk,
  updateStatusProfileThunk,
  saveProfilePhotoThunk,
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { authRedirectComponent } from "../../hoc/authRedirect";
import {
  getAuthorizedIdSelector,
  getProfileSelector,
  getStatusSelector,
  getUploadPhotoStatusSelector,
} from "../../redux/selectors/profile-selectors";

const ProfileContainer = ({
  match,
  authorizedId,
  getUserProfileThunk,
  setStatusProfileThunk,
  profile,
  status,
  updateStatusProfileThunk,
  saveProfilePhotoThunk,
  uploadPhotoStatus,
}) => {
  const userId = match.params.userId || authorizedId;

  useEffect(() => {
    getUserProfileThunk(userId);
    setStatusProfileThunk(userId);
  }, [userId]);

  return (
    <Profile
      profile={profile}
      status={status}
      updateStatus={updateStatusProfileThunk}
      ownerProfile={!match.params.userId}
      saveProfilePhotoThunk={saveProfilePhotoThunk}
      uploadPhotoStatus={uploadPhotoStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  status: getStatusSelector(state),
  authorizedId: getAuthorizedIdSelector(state),
  uploadPhotoStatus: getUploadPhotoStatusSelector(state),
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk,
    setStatusProfileThunk,
    updateStatusProfileThunk,
    saveProfilePhotoThunk,
  }),
  withRouter,
  authRedirectComponent
)(ProfileContainer);
