import React from 'react'
//import{ Link } from 'gatsby'

import styles from "./imagemPerfil-css-modules.module.css"
import Layout from '../components/layout'
import '../style/index.scss'

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

  
const About  = () => {
    return (
        <Layout>
            <h1>Quem Somos</h1>
            <h2>N(atália) / E(mi) / W(ellington)</h2>
            <User
                username="Natália"
                avatar="https://lh3.googleusercontent.com/-ZYyKmZtt_Ss/XLAhTZL3DHI/AAAAAAAAAG0/iLhn2W2p1v8EezapRwzs4Sit7mdOXBKmACEwYBhgLKs0DAL1OcqxzZpqqP94KhdtjqMP0TtWWG0M-nesJPzW_R1bN2gmU8H99dKqmrNMre-rGUGqLegLmPx2FVhxwfjtgQjUlsSGVdannVC_aq_pVBSpDfFt5Vndbai6rkPcSs4M81t0kX7ufnUv16zONRbMxzjXV8W5piINk7gF7pK9E47v9olh8tQDnwFyHZtW-NTPfSeaxJ6k6AvVPKLky9cwoI1xglpI0oYZFB8eypdhFUHZGX-Yhkkl_GLdrHoXd_j_pdKw1vzo_H8ibT4x1zJXYYmwUKWfBD0SIGsy1VM7lekJsD69k3XdzfSFCDPaE2HfUxd9FfC4OQ1NvvcwGAw29IKUuWSIGzsx_0gmpVXCH9VAIsDe8CefpsK1D2Zrs1QGRPPC3ujBfGwkjpuwcNVbRWc4c1UEb77ZQ_dg3KaNosrdICMdvQwIG7ETMoMEMnYQ1nZBGyop4W7juOncIrU3EgJEdqvd0zdOxognK9l-wMZ0xfFIDAAxKQfLwdIwa64ojDyTNtIdiZeqz4BCuEZaXPcBB_UlZ_SmqEYagNBkHnFvgOFgTvq3u1iA1MtncRE37dKU7pP7qMLLc9Tze0jqEjj-eo2gV1JWmbQtv12EwwNaL9gU/w139-h140-p/B612_20190412_021540_899.jpg"
                excerpt="Meu nome é Natalia Kahori Kaneshima, tenho 18 anos e sou aluna do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2º ano (3 período) do curso. Tenho hobbies como cozinhar."
            />
            <User
                username ="Emi"
                avatar = "https://mail.google.com/mail/u/1?ui=2&ik=d13a797eb9&attid=0.2&permmsgid=msg-a:r-2000287435848895879&th=171fa744a67c24d7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-dTwKYRqfofe2wTs14k-uR6zxQKJXzeBD9cQ89MKG5qi2o0UGuYSilCXKACHXWTqLEm4rj6AbWGLtTInbIfo_A0scHLOFbJvuhcHWD9wo4Eq6ExHnybZ7Tk68&disp=emb&realattid=ii_k9zw8q3a1"
                excerpt="Meu nome é Rebeca Emi Ito, tenho 19 e sou aluna do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2º ano (3 período) do curso. Estou atuando como estagiária na Escola Megumi como Professora de Tecnologia (turing), onde eu auxilio as professoras e os alunos (2º ao 5º ano do Fundamental) a mexerem com programação e sou professora de Mangá (oficina de desenho da Escola Megumi). Tenho hobbie como artista(tradicional e digital), fazer webcomics e escritora. Futuramente, pretendo criar meu próprio site, onde vou colocar meus projetos, tais como jogos (códigos, disigner de personagem e levels, e OST), comics e artes."
            />
            <User
                username="Wellington"
                avatar="https://mail.google.com/mail/u/1?ui=2&ik=d13a797eb9&attid=0.1&permmsgid=msg-a:r-2000287435848895879&th=171fa744a67c24d7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ87b8VAEyuXVZTe2OpMnRf3Hr9Y6SIxqhByEg5gwZBN7mEd909rGsNKWpTJ5G6UcxbJ_VEUjmg9lQiMFnqnibaQIQ7shh4qwnNEzXS7jrwSI3FWAM_0FgIy3mQ&disp=emb&realattid=ii_k9zw8b4n0"
                excerpt="Meu nome é Wellington Joji Endo, 20 anos, aluno do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2° Ano no 3° Período. Tenho alguns hobbies como escritor(onde que escrevo sentimentos em textos), faço academia(não por estética e sim por saúde). Posteriormente, penso em ir na área de games, meu desejo é ser roteirista de games ou um Redator."
            />        
            </Layout>
        
    )
}
export default About