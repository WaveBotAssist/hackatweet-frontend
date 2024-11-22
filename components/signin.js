import styles from '../styles/SignIn.module.css';

function SignIn() {

    return (
    <div>
        <div className={styles.signUpContainer}>
            <h3 className={styles.text}>Connect to Hackatweet</h3>
            <div className={styles.inputContainer}>
                
                <input className={styles.input} placeholder='Username'></input>
                <input className={styles.input} placeholder='Password'></input>
                <button className={styles.button}>SignIn</button>
            </div>
        </div>
    </div>
      );

}

export default SignIn;