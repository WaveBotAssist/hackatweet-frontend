import styles from '../styles/Login.module.css';
import Image from 'next/image';
import SignUp from './signup';

function Login() {

    return (
    <div>
        <div className={styles.loginPage}>
        <p className={styles.birdBackground}></p>
        <div className={styles.darkBackground}>
            <Image className={styles.logo} src='/logo.png' alt='logo' width={100} height={100}/>
            <h1 className={styles.titleH1}>See what's happening</h1>
            <h3 className={styles.titleH3}>Join Hackatweet today</h3>
            <SignUp/>
        </div>
        </div>
    </div>
      );

}

export default Login;