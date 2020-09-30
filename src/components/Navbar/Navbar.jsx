import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DivNavbar = styled.nav`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 0 5px;
  box-shadow: 5px 0 10px -5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  a {
    color: black;
  }
  .item a {
    text-decoration: none;
  }
  .activeLink {
    color: white;
  }
  @media screen and (max-width: 1199px) {
    border-radius: 0;
    box-shadow: 0px 7px 14px -5px rgba(0, 0, 0, 0.5);
  }
`;

const Navbar = () => {
  return (
    <DivNavbar className="col-xl-2">
      <div className="item">
        <NavLink to="/profile" activeClassName="activeLink">
          Profile
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs" activeClassName="activeLink">
          Messages
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/users" activeClassName="activeLink">
          Users
        </NavLink>
      </div>
      <div className="item">
        <a>News</a>
      </div>
      <div className="item">
        <a>Music</a>
      </div>
      <div className="item">
        <a>Settings</a>
      </div>
    </DivNavbar>
  );
};

export default Navbar;
