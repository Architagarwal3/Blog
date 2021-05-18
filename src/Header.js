import React from "react";

function Header({ setHome }) {
  return (
    <div className="header">
      <div onClick={() => setHome(true)}>BLOGS</div>
    </div>
  );
}

export default Header;
