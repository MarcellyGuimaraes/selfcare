import styles from './Produtos.module.css'

const Produtos = () => {

    const produtos = [
        {
            id: 1,
            name: 'produto 1',
            src: "/assets/img1.jpg",
            alt: "Produto 1",
        },
        {
            id: 2,
            name: 'produto 2',
            src: "/assets/img2.jpg",
            alt: "Produto 2"
        },
        {
            id: 3,
            name: 'produto 3',
            src: "/assets/img3.jpg",
            alt: "Produto 3"
        },
        {
            id: 4,
            name: 'produto 4',
            src: "/assets/img4.jpg",
            alt: "Produto 4"
        },
        {
            id: 5,
            name: 'produto 5',
            src: "/assets/img5.jpg",
            alt: "Produto 5"
        },
        {
            id: 6,
            name: 'produto 6',
            src: "/assets/img6.jpg",
            alt: "Produto 6"
        },
        {
            id: 7,
            name: 'produto 7',
            src: "/assets/img7.jpg",
            alt: "Produto 7"
        },
        {
            id: 8,
            name: 'produto 8',
            src: "/assets/img8.jpg",
            alt: "Produto 8"
        },
        {
            id: 9,
            name: 'produto 9',
            src: "/assets/img9.jpg",
            alt: "Produto 9"
        },

    ]

    return (
        <div className={styles.container}>
            {produtos.map((produto) => (
                <div className={styles.card} key={produto.id}>
                    <img className={styles.img} src={produto.src} alt={produto.alt} />
                    <p className={styles.title}>Lorem Ipsum dolor sit</p>
                    <p className={styles.price}>R$ <span className={styles.price_color}>50,00</span></p>
                </div>
            ))}
        </div>
    )
}

export default Produtos
