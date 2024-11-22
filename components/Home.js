import React from 'react';
import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import { useState,useEffect } from 'react';
function Home() {

      const [valueTweets,setValueTweets] = useState('');
     


    const handleTweets = ()=>{
     fetch('http://localhost:3000/tweets/add',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ tweet: valueTweets})
     }).then(response => response.json())
     .then(data=>{
        setValueTweets('')
      console.log(data)
     })
    }


import Hashtag from '../components/Hashtag'; 
import Trends from '../components/Trends'; 

const Home = () => {
  const userId = 'idUtilisateur'; // ID de l'utilisateur connu

  return (
    <div className={styles.container}>
           <h1 className={styles.title}>Home</h1>
          <input type='text' onChange={(e)=> setValueTweets(e.target.value)}  value={valueTweets} placeholder="what's up?" />
          <button onClick={()=>handleTweets()} className={styles.btn_tweets}>Tweet</button>
          <LastTweets />
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
