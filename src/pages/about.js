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
                avatar="https://pbs.twimg.com/media/EZSREpxWsAEKnUl?format=jpg&name=small"
                excerpt="Meu nome é Natalia Kahori Kaneshima, tenho 18 anos e sou aluna do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2º ano (3 período) do curso. Tenho hobbies como cozinhar."
            />
            <User
                username ="Emi"
                avatar = "https://66.media.tumblr.com/b00fbd19ad179396284ed40b750c86c2/83871a9f341667ca-bc/s540x810/21d7adb78f8f8ff92a356ec9364edcee7af339fe.jpg"
                excerpt="Meu nome é Rebeca Emi Ito, tenho 19 e sou aluna do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2º ano (3 período) do curso. Estou atuando como estagiária na Escola Megumi como Professora de Tecnologia (turing), onde eu auxilio as professoras e os alunos (2º ao 5º ano do Fundamental) a mexerem com programação e sou professora de Mangá (oficina de desenho da Escola Megumi). Tenho hobbie como artista(tradicional e digital), fazer webcomics e escritora. Futuramente, pretendo criar meu próprio site, onde vou colocar meus projetos, tais como jogos (códigos, disigner de personagem e levels, e OST), comics e artes."
            />
            <User
                username="Wellington"
                avatar="https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-0/s640x640/88185985_1831208943679992_4117089258341138432_o.jpg?_nc_cat=108&_nc_sid=84a396&_nc_oc=AQlj8fwN_6D0xue2e4oULgTXvf3cuXIi7I_bOsLCgCOhTDhF20Pxp2S61pqt2015nxk&_nc_ht=scontent.fbfh3-2.fna&_nc_tp=7&oh=7f9fbd966d516ce4edb7737aae4e6799&oe=5EF7EA8A"
                excerpt="Meu nome é Wellington Joji Endo, 20 anos, aluno do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2° Ano no 3° Período. Tenho alguns hobbies como escritor(onde que escrevo sentimentos em textos), faço academia(não por estética e sim por saúde). Posteriormente, penso em ir na área de games, meu desejo é ser roteirista de games ou um Redator."
            />        
            </Layout>
        
    )
}
export default About