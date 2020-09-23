import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import styled from "styled-components";

const DivProfileInfo = styled.div`
  padding: 0 1rem;
`;
const SpanProfileName = styled.span`
  font-weight: bold;
`;
const ImgProfilePhoto = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <DivProfileInfo>
      <SpanProfileName>{profile.fullName}</SpanProfileName>
      {profile.photos.large && (
        <ImgProfilePhoto src={profile.photos.large} alt="test" />
      )}
      <br />
      <ProfileStatus propsStatus={status} updateStatus={updateStatus} />
    </DivProfileInfo>
  );
};

export default ProfileInfo;
