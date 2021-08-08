import React from "react"
import "../assets/css/post.css"
import Layout from "../components/layout";
import SEO from "../components/seo"
import "katex/dist/katex.min.css"

export default function Post({ pageContext }) {
    const { title, updatedAt, image } = pageContext.post;
    const description = pageContext.post.description.description;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <SEO title={title} description={description} />
            <div className="post-header">
                <h3>{title}</h3>
                <p className="post-date">{updatedAt}</p>
                <img src={image.file.url} className="post-image" alt="post-cover"></img>
                <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
                <ul className="actions fit">
                    <li><a href="\" className="button fit">Home</a></li>
                    <li><a href="\list" className="button fit">一覧に戻る</a></li>
                </ul>
            </div>
        </Layout>
    )
}