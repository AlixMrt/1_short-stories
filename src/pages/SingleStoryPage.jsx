import { useSelector } from "react-redux";
import { selectStoryById } from "../features/stories/storiesSlice";
import { Link, useParams } from "react-router-dom";

export default function SingleStoryPage() {
  const { postId } = useParams();
  const post = useSelector((state) => selectStoryById(state, postId));
  if (!post) {
    return (
      <section>
        <h2 className="heading-2">Post not found !</h2>
      </section>
    );
  }

  if (post) {
    return (
      <section className="_single-story-page" key={post.id}>
        <Link to={"/stories"} className="button">
          &larr;
        </Link>
        <div className="single-story-page__info">
          <h1 className="heading-1">{post.title}</h1>
          <p className="heading-2">
            {post.userId} ({post.date})
          </p>
          <p className="heading-2"></p>
        </div>
        <div className="text-divider"></div>
        <div className="story__content">
          <p>{post.content}</p>
        </div>
      </section>
    );
  }
}
