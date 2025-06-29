// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="todo-footer">
      <p>&copy; {new Date().getFullYear()} ToDo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
