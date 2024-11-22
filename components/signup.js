import styles from '../styles/SignUp.module.css';
import { useState } from 'react';

function SignUp() {
    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');


    const registerUser = () => {
        fetch('http://localhost:3000/users/signup')
        .then(response => response.json)
        .then(data => {
            console.log(data)
        })
    }

    return (
    <div>
        <div className={styles.signUpContainer}>
            <h3 className={styles.text}>Create you Hackatweet account</h3>
            <div className={styles.inputContainer}>
                <input type='text' placeholder='Firstname' className={styles.input} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}></input>
                <input type='text' placeholder='Username' className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
                <input type='text' placeholder='Password' className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}></input>
                <button className={styles.button} onClick={() => registerUser()}>SignUp</button>
            </div>
        </div>
    </div>
      );

}

export default SignUp;