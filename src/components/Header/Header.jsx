import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import reactLogo from "../../assets/logo.png";

const HeaderContainer = styled.nav`
  background: rgba(255, 255, 255, 0.8);
  height: 3rem;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 4px 10px -6px #222;
  flex-wrap: nowrap;
  img {
    margin-right: 0.25rem;
  }
`;
const ButtonAuth = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 0.2rem 1rem;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const SpanProfileName = styled.span`
  font-weight: bold;
  color: black;
  text-decoration: none;
  outline: none;
`;

const Header = ({ logoutThunk, authData }) => {
  return (
    <HeaderContainer className="navbar d-flex justify-content-between align-items-center col-xl-12">
      <div className="navbar-brand">
        <img
          src={reactLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        <span>Lorem</span>
      </div>
      <div>
        {authData.isAuth ? (
          <div>
            <NavLink to="/profile">
              <SpanProfileName>{authData.login}</SpanProfileName>
            </NavLink>
            <span> - </span>
            <ButtonAuth onClick={logoutThunk} className="btn btn-warning">
              Logout
            </ButtonAuth>
          </div>
        ) : (
          <NavLink to="/login">
            <ButtonAuth className="btn btn-warning">Login</ButtonAuth>
          </NavLink>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
