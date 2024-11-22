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


  return (
    <div className={styles.container}>
           <h1 className={styles.title}>Home</h1>
          <input type='text' onChange={(e)=> setValueTweets(e.target.value)}  value={valueTweets} placeholder="what's up?" />
          <button onClick={()=>handleTweets()} className={styles.btn_tweets}>Tweet</button>
          <LastTweets />
    </div>
  );
}

export default Home;
