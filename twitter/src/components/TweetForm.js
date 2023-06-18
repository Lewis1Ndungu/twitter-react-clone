import React, { useState } from 'react';

const TweetForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || content.trim() === '') {
      return;
    }
    onSubmit(username, content);
    setUsername('');
    setContent('');
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="Your tweet..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetForm;
