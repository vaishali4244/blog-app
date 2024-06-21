import React, { useState } from "react";
import { DummyPost } from "../data";
import PostItems from "../components/postItems";

const CategoryPost = () => {
  const [posts] = useState(DummyPost);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts-container">
          {posts.map(({ id, thumbnail, category, title, desc, authorId }) => (
            <PostItems
              key={id}
              postId={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorId={authorId}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Found</h2>
      )}
    </section>
  );
};

export default CategoryPost;
