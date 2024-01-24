import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import MenuItem from "./MenuItem";

const SideBar = (props) => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="bhupendra" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Search" />
      </div>
      <div className="devider"></div>
      {/* MAIN MENU SECTION START */}
      <div className="main-menu">
        <ul>
          <MenuItem
            name={"Dashboard"}
            path="/About"
            icon={"speedometer2"}
            subMenus={[{ name: "Table" }, { name: "Form" }]}
           />
          <MenuItem
            name={"Content"}
            icon={"newspaper"}
            subMenus={[{ name: "Course" }, { name: "Videos" }]}
          />
          <MenuItem
            name={"Design"}
            icon={"vector-pen"} 
            subMenus={[{ name: "Course" }, { name: "Videos" }]}
          />
          <MenuItem name={"Description"} icon={"book"} />


        </ul>
      </div>





      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>bhupendra</h5>
          <p>nirmalkarb626@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
