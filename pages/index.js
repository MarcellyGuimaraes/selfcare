import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiFillStar, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.logo}>
          <AiFillStar /> selfcare
        </h2>

        <div className={styles.menu}>
          <AiOutlineSearch className={styles.icon} size="2rem" color="#5CA720" />
          <AiOutlineUser className={styles.icon} size="2rem" color="#5CA720" />
          <BsCart2 className={styles.icon} size="2rem" color="#5CA720" />
        </div>
      </header>

      <img alt="banner" src="/assets/banner.png" className={styles.banner} />
    </div>
  )
}
