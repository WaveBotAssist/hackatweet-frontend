import styles from '../styles/SignUp.module.css';
import Image from 'next/image';

function SignUp() {

    return (
    <div>
        <div className={styles.signUpContainer}>
            <h3 className={styles.text}>Create you Hackatweet account</h3>
            <div className={styles.inputContainer}>
                <input className={styles.input} placeholder='Firstname'></input>
                <input className={styles.input} placeholder='Username'></input>
                <input className={styles.input} placeholder='Password'></input>
                <button className={styles.button}>SignUp</button>
            </div>
        </div>
    </div>
      );

}

export default SignUp;