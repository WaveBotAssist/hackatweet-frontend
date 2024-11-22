import React from 'react';
import styles from '../styles/Home.module.css';
import Hashtag from '../components/Hashtag'; 
import Trends from '../components/Trends'; 

const Home = () => {
  const userId = 'idUtilisateur'; // ID de l'utilisateur connu

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Accueil</h1>
        {/* Logo cliquable pour retourner à la page d'accueil */}
        <a href="/" className={styles.logo}>Logo</a>
      </header>
      <aside className={styles.sidebar}>
        <Trends />
        {/* Autres éléments de la barre latérale */}
      </aside>
      <main className={styles.main}>
        <Hashtag userId={userId} />
      </main>
      <aside className={styles.rightSidebar}>
        {/* Éléments de la barre latérale droite */}
      </aside>
    </div>
  );
}

export default Home;
