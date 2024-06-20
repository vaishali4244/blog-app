import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./postAuthor";

const PostItems = ({ postId, thumbnail, category, title, desc, authorId }) => {
const shortDescription = desc.length >125 ? desc.substr(0,120)+"...":desc;
const postTitle = title.length >30 ? desc.substr(0,30)+"...":title;

  return (
    <div>
      <article className="post">
        <div className="post-thumbnail">
          <img src={thumbnail} alt={postTitle } />
        </div>
        <div className="post-content">
          <Link to={`/posts/${postId}`}>
            <h3>{postTitle }</h3>
            <p>{shortDescription}</p>
            <div className="post-footer">
              <PostAuthor />
              <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PostItems;
