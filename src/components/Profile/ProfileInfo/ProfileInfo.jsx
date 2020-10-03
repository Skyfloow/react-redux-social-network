import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import UserAvatar from "../../../assets/user-avatar.png";
import SpinnerPhotoLoader from "../../../assets/photo-spinner.gif";

import styled from "styled-components";

const DivProfileInfo = styled.div`
  padding: 0 1rem;
`;
const DivProfileName = styled.div`
  font-weight: bold;
`;
const ImgProfilePhoto = styled.img`
  display: block;
  max-width: 15%;
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
`;
const StyledUploadPhoto = styled.div`
  max-width: 15rem;
  width: 100%;
  margin: 0.5rem 0;
  > input,
  label {
    cursor: pointer;
  }
`;

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  ownerProfile,
  saveProfilePhotoThunk,
  uploadPhotoStatus,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const onSaveProfilePhoto = (e) => {
    if (e.target.files.length) {
      const photoFile = e.target.files[0];
      saveProfilePhotoThunk(photoFile);
    }
  };

  const profilePhoto = uploadPhotoStatus
    ? SpinnerPhotoLoader
    : profile.photos.large || UserAvatar;

  return (
    <DivProfileInfo>
      <DivProfileName>{profile.fullName}</DivProfileName>
      <ImgProfilePhoto src={profilePhoto} alt="Profile photo" />
      {ownerProfile && (
        <StyledUploadPhoto className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onSaveProfilePhoto}
          />
          <label className="custom-file-label" htmlFor="customFile">
            Choose photo
          </label>
        </StyledUploadPhoto>
      )}
      <ProfileStatus propsStatus={status} updateStatus={updateStatus} />
    </DivProfileInfo>
  );
};

export default ProfileInfo;
