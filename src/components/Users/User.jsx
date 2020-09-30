import React from "react";
import { NavLink } from "react-router-dom";

import UserAvatar from "../../assets/user-avatar.png";
import styled from "styled-components";

const ImgUsersAva = styled.img`
  max-width: 100%;
  min-height: auto;
  width: 80px;
  margin-bottom: 0.5rem;
`;
const ButtonFollowUnfollow = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 0.2rem 1rem;
  margin-bottom: 0.2rem;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const DivWrapper = styled.div`
  hr:last-child {
    margin-bottom: 0.5rem;
  }
`;

const User = ({ user, followingStatus, follow, unFollow }) => {
  return (
    <DivWrapper>
      <span>
        <NavLink to={"/profile/" + user.id}>
          <ImgUsersAva
            src={user.photos.small != null ? user.photos.small : UserAvatar}
            alt="avatars"
          />
        </NavLink>
        <div>
          {user.followed ? (
            <ButtonFollowUnfollow
              className="btn btn-secondary"
              disabled={followingStatus.some((id) => id === user.id)}
              onClick={() => {
                unFollow(user.id);
              }}
            >
              Unfollow
            </ButtonFollowUnfollow>
          ) : (
            <ButtonFollowUnfollow
              className="btn btn-light"
              disabled={followingStatus.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </ButtonFollowUnfollow>
          )}
        </div>
      </span>
      <span>
        <div>
          <strong>{user.name}</strong>
        </div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{`u.location.country`}</div>
        <div>{`u.location.city`}</div>
      </span>
      <hr />
    </DivWrapper>
  );
};

export default User;
