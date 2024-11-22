import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Tweet from './Tweet'; 

const Hashtag = () => {
  // Utilisation du hook useRouter pour obtenir le paramètre de hashtag de l'URL
  const router = useRouter();
  const { hashtag } = router.query;
  
  // États pour stocker les tweets, le champ de recherche et les messages
  const [tweets, setTweets] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  // Effet pour récupérer les tweets lorsqu'un hashtag est présent
  useEffect(() => {
    if (hashtag) {
      fetch(`http://localhost:3001/tweets/hashtag/${hashtag}`)
        .then(response => response.json())
        .then(data => {
          // Si des tweets sont trouvés, les stocker dans l'état, sinon afficher un message
          if (data.tweets.length > 0) {
            setTweets(data.tweets);
          } else {
            setMessage(`No tweets found with #${hashtag}`);
            setTweets([]);
          }
        })
        .catch(error => console.error('Error:', error));
    }
  }, [hashtag]);

  // Fonction pour gérer la recherche de hashtags
  const handleSearch = () => {
    router.push(`/hashtag/${search}`);
  };

  // Fonction pour liker les tweets (à implémenter)
  const handleLike = (tweetId) => {
    // "like" pour les tweets
  };

  // Fonction pour supprimer les tweets (à implémenter)
  const handleDelete = (tweetId) => {
    // suppression pour les tweets
  };

  return (
    <div className="hashtag-page">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search hashtags"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {message && <p>{message}</p>}
      <div className="tweets">
        {tweets.map(tweet => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Hashtag;
