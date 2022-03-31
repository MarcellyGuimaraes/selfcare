import Image from 'next/image'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaCcVisa, FaPaypal } from 'react-icons/fa'
import { SiMastercard } from 'react-icons/si'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contato}>
                <ul className={styles.menu}>
                    <li>Contato</li>
                    <li>Termos de serviço</li>
                    <li>Politica de privacidade</li>
                    <li>Cancelamento, troca e reembolso</li>
                </ul>
                <div className={styles.input}>
                    <label htmlFor="1" className={styles.title}>Newsletter</label>
                    <div className={styles.inputText}>
                        <input type="text" className={styles.text} id="1" placeholder="Digite seu melhor e-mail" />
                    </div>
                    <button className={styles.button}>Inscrever</button>
                </div>
            </div>

            <div className={styles.redesSociais}>
                <div>
                    <AiOutlineInstagram className={styles.icon} color="#5CA720" size="2rem" />
                    <AiOutlineFacebook color="#5CA720" size="2rem" />
                </div>
                <div>
                    <SiMastercard className={styles.icon} color="#EB001B" size="2rem" />
                    <FaCcVisa className={styles.icon} color="#254AA5" size="2rem" />
                    <FaPaypal color="#27346A" size="2rem" />
                </div>
            </div>
        </div>
    )
}

export default Footer
