import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <img alt="banner" src="/assets/banner.png" className={styles.banner} />
      <h2 className={styles.promocao}>Promoção</h2>
      <p> 9 Produtos</p>
      <hr />
    </div>
  )
}
