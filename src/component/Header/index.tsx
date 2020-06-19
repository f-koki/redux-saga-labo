import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <div className="Header">
    <Link to="/todo-list">todo list</Link>
  </div>
);

export default Header;
