import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Layout({ children }) {
  return (
    <div className="background-black-gradient">
      {/* Upper left name */}
      <div className="upper-left-name">Francis Gonzales</div>

      {/* Upper right navigation */}
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <span>&gt;</span>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <span>&gt;</span>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
        <span>&gt;</span>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>

      {/* Centered Page content */}
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
}

export default Layout;
