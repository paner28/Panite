import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import { Link } from 'gatsby'

export default function Generic({data, pageContext}){
    return(
        <Layout>
            <Helmet>
                <title>Q-List - Panite</title>
                <meta name="description" content="Panerが気に入った問題や数学クイズのリストです" />
            </Helmet>

            <section id="banner" className="style1">
                <div className="inner">
                    <header className="major">
                        <h1>Q-List</h1>
                    </header>
                    <div className="content">
                        <p>Panerが気に入った問題や数学クイズのリストです</p>
                    </div>
                </div>
            </section>

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        {data.allContentfulPost.edges.map(edge =>
                            <PostLink key={edge.node.slug} post={edge.node} />
                        )}
                    </div>
                </section>
            </div>

            <div style={{textAlign: "center"}}>
              <Link to={pageContext.previousPagePath} className="button" style={{margin: "20px"}}>Previous</Link>
              <Link to={pageContext.nextPagePath} className="button" style={{margin: "20px"}}>Next</Link>
            </div>

            <div style={{textAlign: "center",marginTop:"40px"}}>
                <a href="\#" className="button" style={{width: "200px"}}>Home</a>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
            title
            image {
              title
              file {
                url
              }
            }
            description {
              description
            }
            slug
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
`