import React from 'react';

const Tweet = ({ username, content }) => {
  return (
    <div className="tweet">
      <h4>{username}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Tweet;
