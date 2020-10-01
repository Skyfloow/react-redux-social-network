import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import styled from "styled-components";
import HeaderContainer from "./components/Header/Header-container";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Common/Preloader/Preloader";

import { initializeAppThunk } from "./redux/reducers/app-reducer";
import { getInitializedSelector } from "./redux/selectors/app-selectors";

const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./components/Profile/Profile-container")
);
const UsersContainer = lazy(() => import("./components/Users/Users-container"));
const Login = lazy(() => import("./components/Login/Login"));

const DivAppContent = styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 0;
  border-radius: 0 0 5px 0;
  @media screen and (max-width: 1199px) {
    border-radius: 0 0 5px 5px;
  }
  @media screen and (max-width: 599px) {
    border-radius: 0;
  }
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
        <Suspense fallback={<Preloader />}>
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/login" render={() => <Login />} />
        </Suspense>
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
