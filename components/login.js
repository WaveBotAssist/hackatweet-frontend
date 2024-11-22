import styles from '../styles/Login.module.css';
import Image from 'next/image';
import SignUp from './Signup';
import SignIn from './Signin';

function Login() {

    return (
    <div>
        <div className={styles.loginPage}>
        <div className={styles.birdBackground}></div>
        <div className={styles.darkBackground}>
            <Image className={styles.logo} src='/logo.png' alt='logo' width={100} height={100}/>
            <h1 className={styles.titleH1}>See what's happening</h1>
            <h3 className={styles.titleH3}>Join Hackatweet today</h3>
            <SignUp/>
            <SignIn/>
        </div>
        </div>
    </div>
      );

}

export default Login;