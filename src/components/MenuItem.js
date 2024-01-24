import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
    const [expand, setExpand] = useState(false);
    const { name, subMenus, icon, path } = props;
    
    return (
    <li>
      <a onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">
          <i class={`bi bi-${icon}`}></i>
        </div>
        <span>{name}</span>
      </a>
      {subMenus && subMenus.length > 0 ? (
        subMenus.map((menu, index) => (
      <ul className={`sub-menu ${expand ? "active" : ""}`}>
          <li key={index}>
            <a>{menu.name}</a>
          </li>
      </ul>)
        )
      ) : null}
        
    </li>
  );
};

export default MenuItem;
