import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import styled from "styled-components";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/Header-container";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/Profile-container";
import UsersContainer from "./components/Users/Users-container";
import { initializeAppThunk } from "./redux/reducers/app-reducer";
import { getInitializedSelector } from "./redux/selectors/app-selectors";

const DivAppContent = styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 0;
  border-radius: 0 0 5px 0;
`;

const App = ({ initializeAppThunk, initialized }) => {
  useEffect(() => {
    initializeAppThunk();
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="row">
      <HeaderContainer />
      <Navbar />
      <DivAppContent className="col-xl-10">
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/users" render={() => <UsersContainer />} />

        <Route path="/login" render={() => <Login />} />
      </DivAppContent>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: getInitializedSelector(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeAppThunk,
  })
)(App);
