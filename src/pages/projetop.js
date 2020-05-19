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
                avatar="https://mail.google.com/mail/u/1?ui=2&ik=d13a797eb9&attid=0.4&permmsgid=msg-a:r-2000287435848895879&th=171fa744a67c24d7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_Nl65xSNs1JkIJM6vz3fIFhgFCFhddo_3bprc-JwI1t4fyp93riJNyGPblxWAsSBGZfoqfHc2ZVzkxbmh9skmmJIU0IIS5yCIHFIBk5-b-HbRubshP6e7aO6Q&disp=emb&realattid=ii_k9zw9fou3"
                excerpt="O peso ideal é um projeto desenvolvido em 2019 que tem como objetivo calcular o peso ideal de acordo com o tamanho e gênero da pessoa."
            />
            <User
                username= "Validador de CPF"
                avatar="https://mail.google.com/mail/u/1?ui=2&ik=d13a797eb9&attid=0.3&permmsgid=msg-a:r-2000287435848895879&th=171fa744a67c24d7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9g25uP33GfWfzc_6juHKpdfFKvokv-gL7kktEUnL_ekW5ge8mgAskdyNNbYajjQUb0aFx501D2iG1wW0c93AtetAHa-uC05HwYWiX3NGiYS1a5YmpN6qHSEL0&disp=emb&realattid=ii_k9zw90z02"
                excerpt="O validador de CPF é um projeto desenvolvido em 2019 que tem como objetivo verificar se o CPF é válido ou não"
            />
        </Layout>
    )
}
export default Projetop