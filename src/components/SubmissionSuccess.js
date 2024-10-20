import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function SubmissionSuccess() {
  const { state } = useLocation(); // Retrieve the form data passed in the navigation

  return (
    <div className="submission-success">
      <h1>Thank you, {state?.name}!</h1>
      <p>Your message has been sent successfully.</p>
      <p><strong>Email:</strong> {state?.email}</p>
      <p><strong>Message:</strong> {state?.message}</p>
    </div>
  );
}

export default SubmissionSuccess;
