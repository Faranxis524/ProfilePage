import React from 'react';
import Layout from './Layout';
import './App.css';

function Skills() {
  return (
    <Layout>
      <div className="content-wrapper">
        <div className="skills-page">
          <div className="skills-section">
            <h1>My Skills</h1>
            <hr className="long-line" />
            <ul className="skills-description">
              <li>JavaScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Skills;