import Image from 'next/image'
import styles from './Promocao.module.css'

const Promocao = () => {
    return (
        <div>
            <div className={styles.banner}>

            </div>
            <div className={styles.promocao}>
                <p className={styles.title}>PROMOÇÃO</p>
                <p> 9 Produtos</p>
            </div>
        </div>
    )
}

export default Promocao
