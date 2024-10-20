import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import FrancisPic from './Francis.png';

function Home() {
  return (
    <div className="home-page animated-fade-in">
      {/* Left side with text */}
      <div className="home-text">
        <h1>Francis Dave Gonzales</h1>
        <p>
          Aspiring <span style={{ color: '#7fff00' }}>Software</span>{' '}
          <span style={{ color: '#7fff00' }}>Engineer</span>{' '}
          from University of Cabuyao
        </p>

        {/* Navigation Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <span>&gt;</span>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <span>&gt;</span>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
          <span>&gt;</span>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/paransiskodabid" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/frncsgnzlss/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right side profile picture */}
      <div className="profile-picture"
        style={{ backgroundImage: `url(${FrancisPic})` }}>
      </div>
    </div>
  );
}

export default Home;
