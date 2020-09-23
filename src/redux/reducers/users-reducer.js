import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_COUNT_PAGES,
  SET_TOGGLE_LOADING,
  SET_FOLLOWING_STATUS,
} from "../action-const";
import { userAPI } from "../../Api/api";
import { updateObjectInArray } from "../../utils/object-helpers";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  isLoading: true,
  isFetchingFollowingStatus: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_COUNT_PAGES: {
      return { ...state, totalUsersCount: action.countPages };
    }
    case SET_TOGGLE_LOADING: {
      return { ...state, isLoading: action.toggleLoading };
    }
    case SET_FOLLOWING_STATUS: {
      return {
        ...state,
        isFetchingFollowingStatus: action.isFetchingStatus
          ? [...state.isFetchingFollowingStatus, action.id]
          : state.isFetchingFollowingStatus.filter((id) => id !== action.id),
      };
    }
    default:
      return state;
  }
};

export const followSucess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSucess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setCountPages = (countPages) => ({
  type: SET_COUNT_PAGES,
  countPages,
});
export const setToggleLoading = (toggleLoading) => ({
  type: SET_TOGGLE_LOADING,
  toggleLoading,
});
export const setFollowingStatus = (isFetchingStatus, id) => ({
  type: SET_FOLLOWING_STATUS,
  isFetchingStatus,
  id,
});

export const getUsers = () => async (dispatch) => {
  const response = await userAPI.getUsers();
  dispatch(setUsers(response.items));
  dispatch(setToggleLoading(false));
  dispatch(setCountPages(Math.ceil(response.totalCount / 50)));
};

export const changePage = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(setToggleLoading(true));

  const response = await userAPI.getUsers(currentPage, pageSize);

  dispatch(setUsers(response.items));
  dispatch(setToggleLoading(false));
};

const followUnfollow = async (
  dispatch,
  currentId,
  apiMethod,
  actionCreator
) => {
  dispatch(setFollowingStatus(true, currentId));
  const response = await apiMethod(currentId);

  if (response.resultCode === 0) {
    dispatch(actionCreator(currentId));
  }
  dispatch(setFollowingStatus(false, currentId));
};

export const followThunk = (currentId) => async (dispatch) => {
  const apiMethod = userAPI.follow.bind(this);

  followUnfollow(dispatch, currentId, apiMethod, followSucess);
};

export const unFollowThunk = (currentId) => (dispatch) => {
  const apiMethod = userAPI.unFollow.bind(this);

  followUnfollow(dispatch, currentId, apiMethod, unFollowSucess);
};

export default usersReducer;
