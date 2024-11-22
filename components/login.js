import { useState } from 'react';
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import SignUp from './Signup';
import SignIn from './Signin';
import { Modal } from 'antd';

function Login() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const showModal = (type) => {
        setModalContent(type);
		setIsModalVisible(true);
	};

    return (
    <div>
        <div className={styles.loginPage}>
            <div className={styles.birdBackground}></div>
            <div className={styles.darkBackground}>
                <Image className={styles.logo} src='/logo.png' alt='logo' width={100} height={100}/>
                    <div className={styles.contentContainer}>
                        <h1 className={styles.titleH1}>See what's happening</h1>
                        <h3 className={styles.titleH3}>Join Hackatweet today</h3>
                        <button className={styles.signup} onClick={() => showModal('SignUp')}>SignUp</button>
                        <h4 className={styles.titleH4}>Already have an account</h4>
                        <button className={styles.signin} onClick={() => showModal('SignIn')}>SignIn</button>
                    </div>
            </div>
        </div>
        {/* Modal*/}
        <Modal title={modalContent === 'SignUp' ? 'Sign Up' : 'Sign In'} open={isModalVisible} closable={false} footer={null} styles={{body: {backgroundColor: '#151d27'}}}>
            {modalContent  === 'SignUp' && <SignUp />}
            {modalContent  === 'SignIn' && <SignIn />}
        </Modal>
    </div>
      );

}

export default Login;