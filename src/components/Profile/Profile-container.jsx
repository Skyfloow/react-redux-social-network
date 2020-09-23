import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfileThunk,
  setStatusProfileThunk,
  updateStatusProfileThunk,
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { authRedirectComponent } from "../../hoc/authRedirect";
import {
  getAuthorizedIdSelector,
  getProfileSelector,
  getStatusSelector,
} from "../../redux/selectors/profile-selectors";

const ProfileContainer = ({
  match,
  authorizedId,
  getUserProfileThunk,
  setStatusProfileThunk,
  profile,
  status,
  updateStatusProfileThunk,
}) => {
  useEffect(() => {
    let userId = match.params.userId;

    if (!userId) {
      userId = authorizedId;
    }

    getUserProfileThunk(userId);
    setStatusProfileThunk(userId);
  }, []);

  return (
    <Profile
      profile={profile}
      status={status}
      updateStatus={updateStatusProfileThunk}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  status: getStatusSelector(state),
  authorizedId: getAuthorizedIdSelector(state),
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk,
    setStatusProfileThunk,
    updateStatusProfileThunk,
  }),
  withRouter,
  authRedirectComponent
)(ProfileContainer);
