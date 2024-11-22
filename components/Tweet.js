import React from 'react';

const Tweet = ({ tweet, onLike, onDelete }) => {
  const handleLike = () => {
    onLike(tweet.id);
  };

  const handleDelete = () => {
    onDelete(tweet.id);
  };

  return (
    <div className="tweet">
      <p>{tweet.content}</p>
      <p>— {tweet.author}</p>
      <div>
        <button onClick={handleLike}>Like {tweet.likes}</button>
        {tweet.isAuthor && <button onClick={handleDelete}>Delete</button>}
      </div>
    </div>
  );
};

export default Tweet;
