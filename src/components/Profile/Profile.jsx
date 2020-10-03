import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({
  profile,
  status,
  updateStatus,
  ownerProfile,
  saveProfilePhotoThunk,
  uploadPhotoStatus,
}) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        ownerProfile={ownerProfile}
        saveProfilePhotoThunk={saveProfilePhotoThunk}
        uploadPhotoStatus={uploadPhotoStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
