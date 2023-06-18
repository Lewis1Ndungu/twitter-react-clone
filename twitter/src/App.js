import React, { useState } from 'react';
import Header from './components/Header';
import Tweet from './components/Tweet';
import TweetForm from './components/TweetForm';

const App = () => {
  const [tweets, setTweets] = useState([]);

  const handleTweetSubmit = (username, content) => {
    const newTweet = { username, content };
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  return (
    <div className="App">
      <Header />
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
  );
};

export default App;
