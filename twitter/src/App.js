import React, { useState } from 'react';
import Header from './components/Header';
import Tweet from './components/Tweet';
import TweetForm from './components/TweetForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  const handleTweetSubmit = (content) => {
    const newTweet = { username, content };
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  return (
    <div className="App">
      <Header />
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <TweetForm onSubmit={handleTweetSubmit} />
          <div className="tweet-list">
            {tweets.map((tweet, index) => (
              <Tweet
                key={index}
                username={tweet.username}
                content={tweet.content}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
