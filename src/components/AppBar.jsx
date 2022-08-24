import React from "react";
import "../App.css";

const AppBar = () => {
  return (
    <div>
      <nav className="App-header">
        <div>
          <span className="Ap-logo">TECHSTORE</span>
        </div>

        <div>
          <ul className="App-header-center">
            <li>
              <a href="#homeware">Homeware</a>
            </li>
            <li>
              <a href="#homeware">Mobile</a>
            </li>
            <li>
              <a href="#homeware">Cars</a>
            </li>
            <li>
              <a href="#homeware">Tools</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="App-header-right">
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#shop">Account</a>
            </li>
            <li>
              <a href="#shop">Menu</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
