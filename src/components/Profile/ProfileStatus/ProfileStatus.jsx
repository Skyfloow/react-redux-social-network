import React, { useState, useEffect } from "react";

export const ProfileStatus = ({ propsStatus, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(propsStatus);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    if (status !== propsStatus) {
      updateStatus(status);
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(propsStatus);
  }, [propsStatus]);

  return (
    <div>
      {editMode ? (
        <input
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          autoFocus={true}
          type="text"
          value={status}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{status}</span>
      )}
    </div>
  );
};
