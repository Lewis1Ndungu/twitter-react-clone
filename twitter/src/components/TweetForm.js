import React, { useState } from 'react';

const Tweet = ({ username, content }) => {
  const [likes, setLikes] = useState(0);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleRetweet = () => {
    setIsRetweeted(true);
  };

  return (
    <div className="tweet">
      <h4>{username}</h4>
      <p>{content}</p>
      <div className="actions">
        <button onClick={handleLike}>
          Like {likes > 0 && <span>({likes})</span>}
        </button>
        <button onClick={handleRetweet} disabled={isRetweeted}>
          {isRetweeted ? 'Retweeted' : 'Retweet'}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
