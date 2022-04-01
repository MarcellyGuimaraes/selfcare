import Head from 'next/head'
import { AiFillStar, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <Head>
                <title>SelfCare - Isis Marcelly</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <AiFillStar size="1.3rem" className={styles.logoImg} />
                    <h3>selfcare</h3>
                </div>

                <div className={styles.menu}>
                    <AiOutlineSearch className={styles.icon} size="2rem" color="#5CA720" />
                    <AiOutlineUser className={styles.icon} size="2rem" color="#5CA720" />
                    <BsCart2 className={styles.icon} size="2rem" color="#5CA720" />
                </div>
            </header>
        </div>
    )
}

export default Header
