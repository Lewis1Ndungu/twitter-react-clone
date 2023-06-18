import React, { useState } from 'react';
import Header from './components/Header';
import Tweet from './components/Tweet';
import TweetForm from './components/TweetForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
    // Set initial followers, following, and following status
    setFollowers(100); // Replace with the actual value
    setFollowing(50); // Replace with the actual value
    setIsFollowing(true); // Replace with the actual value
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    // Reset followers, following, and following status
    setFollowers(0);
    setFollowing(0);
    setIsFollowing(false);
  };

  const handleTweetSubmit = (content) => {
    const newTweet = { username, content };
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  const handleFollow = () => {
    setIsFollowing(true);
    setFollowers((prevFollowers) => prevFollowers + 1);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setFollowers((prevFollowers) => prevFollowers - 1);
  };

  return (
    <div className="App">
      <Header />
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <UserProfile
            username={username}
            followers={followers}
            following={following}
            onFollow={handleFollow}
            onUnfollow={handleUnfollow}
          />
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
