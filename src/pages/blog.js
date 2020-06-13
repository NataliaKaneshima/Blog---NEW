import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import '../style/index.scss'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'   

const Blog = props => {
    const data = useStaticQuery (graphql`
        query { 
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields{ 
                            slug
                        }
                    }
                }
            }
        }
    `)


    console.log(props)

    let disqusConfig = {
        // url: `${config.siteUrl+location.pathname}`,
        // identifier: props.data.allMarkdownRemark.edges.node.fields.slug,
        // title: props.data.allMarkdownRemark.edges.node.frontmatter.title,
    }


    return (
        <Layout>
            <h2>Informativo</h2>
            <p><a href="https://github.com/NataliaKaneshima/Blog---NEW" target="_blank" rel="noopener noreferrer">Repositório do GitHub</a></p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return(
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.data}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            
            <Disqus config={disqusConfig} />
        </Layout>
    )

}
export default Blog