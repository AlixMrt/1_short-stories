import StoryExcerpt from "./StoryExcerpt";

export default function StoriesList({ posts }) {
  return (
    <div className="stories-list">
      {posts.map((post) => {
        return <StoryExcerpt key={post.id} post={post} />;
      })}
    </div>
  );
}
