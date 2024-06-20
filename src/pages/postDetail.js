import React from "react";
import PostAuthor from "../components/postAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuthor />
        </div>
        <div className="post-detail-btns">
          <Link to={`/posts/samuel/edit`} className="btn sm primary">
            Edit
          </Link>
          <Link to={`/posts/samuel/edit`} className="btn sm danger">
            Delete
          </Link>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail-thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          harum eum, totam culpa laudantium eius consequuntur beatae id eos
          natus debitis quam placeat dicta enim soluta cum unde distinctio
          incidunt ipsam. Laborum magni, aliquid quia unde error accusantium
          quis aspernatur. Molestias minus dolores possimus omnis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          modi dolores accusamus veritatis possimus doloremque obcaecati quidem,
          harum repellat unde dolorum tenetur earum. Alias iste corrupti ducimus
          culpa fuga adipisci vel soluta non nostrum minima voluptas doloremque
          excepturi, debitis dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          pariatur aliquid impedit minus officia ipsum consequuntur, vero, autem
          accusamus quod dolorem odit illum possimus earum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          suscipit illo explicabo veritatis saepe doloremque quod dolores velit
          vitae. Dolores, aperiam! Provident numquam voluptas blanditiis beatae,
          saepe aperiam fuga, ipsa corporis aliquam minus alias, sed dolorem
          esse illo? Placeat distinctio molestiae tenetur sunt, quasi veniam!
          Suscipit nesciunt corrupti temporibus velit?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
