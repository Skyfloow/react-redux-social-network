import { addPostActionCreator } from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { getMyPostsSelector } from "../../../redux/selectors/profile-selectors";

const mapStateToProps = (state) => {
  return {
    posts: getMyPostsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
