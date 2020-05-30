import React from 'react'
//import { Link } from 'gatsby'
import styles from "./imagensDoTT-css.css"
import Layout from '../components/layout'
import '../style/index.scss'

console.log(styles)

const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt=""/>
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )

const IndexPage = () => {
    return(
        <Layout>
            <h1>Tech Stack</h1>
            <table>
                <User 
                avatar="https://mail.google.com/mail/u/1?ui=2&ik=d13a797eb9&attid=0.1&permmsgid=msg-f:1667071014585810025&th=1722a04157bcbc69&view=att&disp=safe&realattid=f_kad3avtm0"
                />
                <User 
                avatar="https://cdn-images-1.medium.com/max/800/1*Mn_mGNUGxK6gCROym_z8Bg.png"
                />
                <User 
                avatar="https://javascriptforwp.com/wp-content/uploads/2019/03/badge-gatsby.png"
                />
                <User
                    avatar="https://miro.medium.com/max/350/1*6lGiuTY6uc2oHJk5qfcRHg.png"
                />
                <User
                    avatar="https://download.seaicons.com/icons/martz90/hex/512/css-3-icon.png"
                />
                <User 
                avatar="https://pbs.twimg.com/profile_images/1150888239475122176/b2lWK7c0_400x400.png"
                />
                <User 
                avatar="https://miro.medium.com/max/325/0*tTvqxZBtyiDw3vVw.png"
                />
                <User 
                avatar="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"
                />
                <User 
                avatar="https://mail.google.com/mail/u/1?ui=2&ik=d13a797eb9&attid=0.9&permmsgid=msg-f:1667071014585810025&th=1722a04157bcbc69&view=att&disp=safe&realattid=f_kad3aw0o17"
                />
                
            </table>
        </Layout>
       
    )
    
}
    
 export default IndexPage