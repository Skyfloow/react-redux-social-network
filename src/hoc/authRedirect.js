import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

export const authRedirectComponent = (Component) => {
  const wrappedComponent = (props) => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };

  const connectedWrappedComponent = compose(connect(mapStateToProps))(
    wrappedComponent
  );

  return connectedWrappedComponent;
};

let mapStateToProps = (state) => ({
  isAuth: state.authUserData.isAuth,
});
