import React from "react";

const SideBarItem = ({ children }) => {
  return (
    <div className="sidebarOption my-3- mx-3">
      <div className="container p-2 border-rd">{children}</div>
    </div>
  );
};

export default SideBarItem;
