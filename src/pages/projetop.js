import React from 'react'
import Layout from '../components/layout'
import '../style/index.scss'
import styles from "./imagem-css-projetos.css"


console.log(styles)

const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )

const Projetop = () => {
    return(
        <Layout>
            <h2>Projetos Pessoais</h2>
            <User 
                username="Peso Ideal"
                avatar="https://pbs.twimg.com/media/EZSOLLiXsAU0WCm?format=jpg&name=small"
                excerpt="O peso ideal é um projeto desenvolvido em 2019 que tem como objetivo calcular o peso ideal de acordo com o tamanho e gênero da pessoa."
            />
            <User
                username= "Validador de CPF"
                avatar="https://pbs.twimg.com/media/EZSOg8KWkAIYj5t?format=jpg&name=small"
                excerpt="O validador de CPF é um projeto desenvolvido em 2019 que tem como objetivo verificar se o CPF é válido ou não"
            />
        </Layout>
    )
}
export default Projetop