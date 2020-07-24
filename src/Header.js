import React from "react";
import CustomizedDialogs from "./CustomizedDialogs"
function Header() {
  return (
    <header className="Header" >
      <h1>PocketPics</h1>
        <CustomizedDialogs />
      <h4>Reduce the number of tabs open by snipping and saving!</h4>
      </header>
  );
}

export default Header;
