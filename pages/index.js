import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>
          <Image alt="logo" src="/assets/estrela.png" width={20} height={20} /> selfcare
        </h2>
      </header>
      <img alt="banner" src="/assets/banner.png" className={styles.banner} />
    </div>
  )
}
