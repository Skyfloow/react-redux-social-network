import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  followThunk,
  unFollowThunk,
  setUsers,
  setCurrentPage,
  setCountPages,
  setToggleLoading,
  setFollowingStatus,
  getUsers,
  changePage,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import { compose } from "redux";
import {
  getUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getIsLoadingSelector,
  getFollowingStatusSelector,
} from "../../redux/selectors/users-selectors.js";

const UsersContainer = ({
  getUsers,
  changePage,
  pageSize,
  totalUsersCount,
  followThunk,
  unFollowThunk,
  users,
  currentPage,
  isLoading,
  followingStatus,
}) => {
  useEffect(() => {
    getUsers();
  }, []);

  const changeCurrentPage = (currentPage) => {
    changePage(currentPage, pageSize);
  };

  return (
    <Users
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      changeCurrentPage={changeCurrentPage}
      follow={followThunk}
      unFollow={unFollowThunk}
      users={users}
      currentPage={currentPage}
      isLoading={isLoading}
      followingStatus={followingStatus}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isLoading: getIsLoadingSelector(state),
    followingStatus: getFollowingStatusSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    followThunk,
    unFollowThunk,
    setUsers,
    setCurrentPage,
    setCountPages,
    setToggleLoading,
    setFollowingStatus,
    getUsers,
    changePage,
  })
)(UsersContainer);
