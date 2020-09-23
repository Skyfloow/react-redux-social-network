import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import UsersPagination from "../Common/Pagination/Paginator";

import styled from "styled-components";
import User from "./User";

const DivContainer = styled.div`
  padding: 0 1rem;
`;

const Users = ({
  totalUsersCount,
  pageSize,
  users,
  followingStatus,
  follow,
  unFollow,
  currentPage,
  changeCurrentPage,
  isLoading,
}) => {
  const UsersWrapper = () => {
    return (
      <DivContainer>
        {users.map((u) => (
          <User
            user={u}
            followingStatus={followingStatus}
            follow={follow}
            unFollow={unFollow}
            key={u.id}
          />
        ))}

        <UsersPagination
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
        />
      </DivContainer>
    );
  };

  return (
    <React.Fragment>
      {isLoading ? <Preloader /> : <UsersWrapper />}
    </React.Fragment>
  );
};

export default Users;
