import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
  const path = "/dialogs/" + id;
  return (
    <div>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
