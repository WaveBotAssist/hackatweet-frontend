import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Tweet from './Tweet'; // Importation du composant Tweet

const Hashtag = ({ userId }) => {
  const router = useRouter();
  const { hashtag } = router.query; // Extraction du hashtag depuis l'URL

  const [tweets, setTweets] = useState([]); // État pour stocker les tweets
  const [search, setSearch] = useState(''); // État pour stocker la recherche
  const [message, setMessage] = useState(''); // État pour les messages d'erreur ou d'information

  // Effet qui se déclenche lorsqu'un hashtag est présent dans l'URL
  useEffect(() => {
    if (hashtag) {
      // Récupération des tweets correspondant au hashtag
      fetch(`http://localhost:3000/tweets/hashtag/${hashtag}`)
        .then(response => response.json())
        .then(data => {
          // Si des tweets sont trouvés, on les stocke dans l'état
          if (data.tweets.length > 0) {
            setTweets(data.tweets);
          } else {
            // Sinon, on affiche un message indiquant qu'aucun tweet n'a été trouvé
            setMessage(`No tweets found with #${hashtag}`);
            setTweets([]);
          }
        })
        .catch(error => console.error('Error:', error)); // Gestion des erreurs
    }
  }, [hashtag]); // Dépendance sur le hashtag

  // Fonction pour gérer la recherche de hashtags
  const handleSearch = () => {
    router.push(`/hashtag/${search}`); // Mise à jour de l'URL avec le nouveau hashtag recherché
  };

  // Fonction pour liker les tweets
  const handleLike = (tweetId) => {
    fetch(`/tweets/${tweetId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }) // Utiliser l'ID passé en props
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        // Mise à jour de l'état des tweets pour refléter le changement dans les likes
        console.log('Tweet liké/dé-liké avec succès');
        setTweets(prevTweets => prevTweets.map(tweet =>
          tweet.id === tweetId ? { ...tweet, likes: tweet.likes + (data.liked ? 1 : -1) } : tweet
        ));
      } else {
        console.error('Erreur lors du like:', data.message); // Gestion des erreurs
      }
    })
    .catch(error => console.error('Erreur lors de la requête de like:', error)); // Gestion des erreurs
  };

  // Fonction pour supprimer les tweets
  const handleDelete = (tweetId) => {
    fetch(`/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        // Mise à jour de l'état des tweets pour supprimer le tweet de la liste
        console.log('Tweet supprimé avec succès');
        setTweets(prevTweets => prevTweets.filter(tweet => tweet.id !== tweetId));
      } else {
        console.error('Erreur lors de la suppression:', data.message); // Gestion des erreurs
      }
    })
    .catch(error => console.error('Erreur lors de la requête de suppression:', error)); // Gestion des erreurs
  };

  return (
    <div className="hashtag-page">
      <div className="search-bar">
        <input
          type="text"
          value={search} // Valeur actuelle de la recherche
          onChange={(e) => setSearch(e.target.value)} // Mise à jour de la recherche en fonction de l'entrée de l'utilisateur
          placeholder="Search hashtags" // Placeholder pour l'input
        />
        <button onClick={handleSearch}>Search</button> // Bouton pour lancer la recherche
      </div>
      {message && <p>{message}</p>} // Affichage d'un message si présent
      <div className="tweets">
        {tweets.map(tweet => (
          <Tweet
            key={tweet.id} // Clé unique pour chaque tweet
            tweet={tweet} // Passage des données du tweet en props
            onLike={handleLike} // Fonction de like passée en props
            onDelete={handleDelete} // Fonction de suppression passée en props
          />
        ))}
      </div>
    </div>
  );
};

export default Hashtag;
