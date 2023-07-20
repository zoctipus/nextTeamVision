import React, { useState } from 'react';
import './Demo.css';
import App from './App.jsx'

function Demo() {
  const [feedback, setFeedback] = useState('');
  const [liked, setLiked] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleLikedClick = () => {
    setLiked(!liked);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Submit feedback (to a server, for example)
    console.log('Feedback submitted: ', feedback);
  };

  return (
    <div className="demo">
      <div className="mission">
      <h3>
          Launching Next Team Vision
      </h3>
      <h7 className="slogan">"Founded by Employees,"<br/>
          "Empowering Employees:"<br/>
          "Uncovering the Heartbeat of Corporate Culture."</h7>

        <form onSubmit={handleFeedbackSubmit}>
          <textarea value={feedback} onChange={handleFeedbackChange} placeholder="Share your thought about this project" />
          <button type="submit">Submit Feedback</button>
        </form>
        <button onClick={handleLikedClick}>{liked ? 'You liked our mission' : 'I NEED IT'}</button>
      </div>
      <div className="app-demo">
        <App/>
      </div>
    </div>
  );
}

export default Demo;
