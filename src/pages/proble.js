import React from'react'
//import{ Link } from 'gatsby'

import Layout from '../components/layout'
import '../style/index.scss'

const Problema = () => {
    return (
        <Layout>
            <h1>Agradecimentos</h1>
            <h2>Não conseguiriamos fazer esse projetos sem a ajuda dessas pessoas.</h2>

        <h3>Criando um site com Gatsby</h3>
        <p>
            Para desenvolver o Blog usando Gatsby, foi utilizado o vídeo do Andrew Mead: <a href= "https://youtu.be/8t0vNu2fCCM" target="_blank" rel="noopener noreferrer">Gatsby JS - The Great Gatsby Bootcamp [Full Tutorial]</a>, e o site oficial do <a href= "https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>.
        </p>

        <h3>Colocando um site na AWS</h3>
        <p>
            Para ter feito essa parte utilizamos os vídeos e a ajudas de colegas:
            <ul>
                <li><a href="https://youtu.be/QVouMIlyaJ8" target="_blank" rel="noopener noreferrer">Como abrir portas para instâncias do Amazon EC2</a></li>
                <li><a href="https://youtu.be/HR2UlqK4_Nw" target="_blank" rel="noopener noreferrer">Aula Prática - Criando um servidor linux na AWS</a></li>
                <li><a href="https://youtu.be/mCbiBcE1lA0" target="_blank" rel="noopener noreferrer">Configurando um servidor na Amazon Web Services</a></li>
            </ul>
        </p>

        </Layout>
    
    )
}

export default Problema