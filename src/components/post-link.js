import React from "react"
import "../assets/css/post-link.css"
import { Link } from "@reach/router";

export default function PostLink({ post }) {
    const { title, updatedAt, image } = post;
    const description = post.description.description;
    const pageLink = `/post/${post.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link inner">
                <div>
                    <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
                </div>
                <div className="post-link-text">
                    <h3>{title}</h3>
                    <p className="post-link-body">{description}</p>
                    <p className="post-link-date">最終更新日 : {updatedAt}</p>
                </div>
            </div>
        </Link>
    )
}