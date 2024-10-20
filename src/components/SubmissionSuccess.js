import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function SubmissionSuccess() {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="page-content submission-success">
        <h1>Thank You!</h1>
        <div className="success-message">
          <p>Your message has been sent successfully.</p>
          <p>We appreciate your feedback, {state?.name}!</p>
        </div>
        <div className="submission-details">
          <h2>Submission Details:</h2>
          <p><strong>Name:</strong> {state?.name}</p>
          <p><strong>Email:</strong> {state?.email}</p>
          <p><strong>Message:</strong> {state?.message}</p>
        </div>
        <Link to="/" className="back-home-btn">Back to Home</Link>
      </div>
    </Layout>
  );
}

export default SubmissionSuccess;
