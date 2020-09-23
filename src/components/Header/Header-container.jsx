import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  setUserData,
  getProfileThunk,
  logoutThunk,
} from "../../redux/reducers/auth-reducer";
import { compose } from "redux";
import { getAuthDataSelector } from "../../redux/selectors/header-selectors";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getProfileThunk();
  }, []);

  return <Header {...props} />;
};

let mapStateToProps = (state) => ({
  authData: getAuthDataSelector(state),
});

export default compose(
  connect(mapStateToProps, { setUserData, getProfileThunk, logoutThunk })
)(HeaderContainer);
