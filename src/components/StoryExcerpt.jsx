import React from "react";
import { Link } from "react-router-dom";
import TextDivider from "./TextDivider";

export default function StoryExcerpt({ post }) {
  return (
    <article className="story" key={post.id}>
      <div className="story__info">
        <h3 className="heading-3">{post.title}</h3>
        <p className="heading-4">
          {post.userId} ({post.date})
        </p>
      </div>
      <TextDivider />
      <div className="story__content">
        <p className="content">{post.content.substring(0, 263)}...</p>
      </div>
      <p className="user-name">
        {post.favorite
          ? `${post.userName}'s favorite story ❤️`
          : `Story posted by ${post.userName}`}
      </p>
      <Link className="button" to={`${post.id}`}>
        Read this Story
      </Link>
    </article>
  );
}
