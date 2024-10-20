import React from 'react';
import Layout from './Layout';
import './App.css';

// Importing icons
import NetflixIcon from './netflix.png';
import SteamIcon from './steam.png';
import SpotifyIcon from './spotify.png';
import DiscordIcon from './discord.png';
import WifiIcon from './wifi.png';
import VideoIcon from './video-editing.png';

function About() {
  return (
    <Layout>
    <div className="background-black-gradient">
      {/* Upper left name */}
      <div className="upper-left-name">Francis Gonzales</div>


      {/* Page content */}
      <div className="page-content">
        {/* About Me section */}
        <div className="about-section">
          <h1>ABOUT ME</h1>
          <hr className="long-line" />
          <p className="about-description">
          Dangal Greetings, I'm Francis Gonzales, a driven BS Computer Science student from University of Cabuyao. With a passion for technology and creativity, I'm pursuing my dream of becoming a software engineer. When I'm not coding, you can find me editing videos, exploring full-stack programming, or learning new tech skills. As a third-year Student, I balance academics with hobbies like drawing, gaming, billiards, and hanging out with friends. I'm always up for trying new food spots, watching movies, or browsing the internet for inspiration. Let's connect and share ideas on tech, innovation, and creativity!
          </p>
        </div>

        {/* Interests section */}
        <div className="interests-section">
          <h2>INTERESTS</h2>
          <hr className="long-line" />

          <div className="interests-list">
            <div className="interest-item">
              <img src={NetflixIcon} alt="Netflix Logo" />
              <p>Watching Movies</p>
            </div>
            <div className="interest-item">
              <img src={SteamIcon} alt="Steam Logo" />
              <p>Playing Games</p>
            </div>
            <div className="interest-item">
              <img src={SpotifyIcon} alt="Spotify Logo" />
              <p>Listening to Music</p>
            </div>
            <div className="interest-item">
              <img src={DiscordIcon} alt="Discord Logo" />
              <p>Chatting on Discord</p>
            </div>
            <div className="interest-item">
              <img src={WifiIcon} alt="Wifi Logo" />
              <p>Browsing the Internet</p>
            </div>
            <div className="interest-item">
              <img src={VideoIcon} alt="Video Editing Logo" />
              <p>Video Editing</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </Layout> 
  );
}

export default About;
