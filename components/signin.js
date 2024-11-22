import styles from '../styles/SignIn.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from '../reducers/user';

function SignIn() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    const connectUser = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({username: signInUsername, password: signInPassword,  }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.result) {
                dispatch(login({firstname: data.firstname, username: signInUsername, image: data.image, token: data.token}));
                router.push('/home');
            } else {
                alert(data.error)
            }
        })
    }

    return (
    <div>
        <div className={styles.signUpContainer}>
            <h3 className={styles.text}>Connect to Hackatweet</h3>
            <div className={styles.inputContainer}>
                
                <input type='text' placeholder='Username'className={styles.input} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}></input>
                <input type='text' placeholder='Password' className={styles.input} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}></input>
                <button className={styles.button} onClick={() => connectUser()}>SignIn</button>
            </div>
        </div>
    </div>
      );

}

export default SignIn;