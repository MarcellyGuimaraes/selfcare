import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Promocao from '../components/Promocao'
import Produtos from '../components/Produtos'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Promocao />
      <Produtos />
    </div>
  )
}
