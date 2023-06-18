import React from 'react';

const UserProfile = ({ username, followers, following, onFollow, onUnfollow }) => {
  return (
    <div className="user-profile">
      <h3>{username}</h3>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <div className="actions">
        <button onClick={onFollow}>Follow</button>
        <button onClick={onUnfollow}>Unfollow</button>
      </div>
    </div>
  );
};

export default UserProfile;
