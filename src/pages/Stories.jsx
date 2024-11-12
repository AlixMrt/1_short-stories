import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import StoriesList from "../components/StoriesList";
import {
  selectAllStories,
  selectFavoriteStories,
} from "../features/stories/storiesSlice";

export default function Stories() {
  const posts = useSelector(selectAllStories);
  const favoriteStories = useSelector(selectFavoriteStories);

  const [storiesToBeDisplayed, setStoriesToBeDisplayed] = useState(posts);

  // Memoize posts and favorite stories to avoid unnecessary re-renders
  const memoizedPosts = useMemo(() => posts, [posts]);
  const memoizedFavoriteStories = useMemo(
    () => favoriteStories,
    [favoriteStories]
  );

  function handleFilterClick(e) {
    if (e.target.value === "posts") {
      setStoriesToBeDisplayed(memoizedPosts);
    } else if (e.target.value === "favoriteStories") {
      setStoriesToBeDisplayed(memoizedFavoriteStories);
    }
  }

  return (
    <section className="stories">
      {storiesToBeDisplayed === memoizedPosts && (
        <h1 className="heading-1">
          {" "}
          All our {memoizedPosts.length} Short Stories
        </h1>
      )}
      {storiesToBeDisplayed === memoizedFavoriteStories && (
        <h1 className="heading-1">
          Our {memoizedFavoriteStories.length} favorite Short Stories
        </h1>
      )}

      <div className="filters">
        <button
          className={`button | ${
            storiesToBeDisplayed === memoizedPosts && "active"
          } `}
          onClick={handleFilterClick}
          value={"posts"}
        >
          All
        </button>
        <button
          className={`button | ${
            storiesToBeDisplayed === memoizedFavoriteStories && "active"
          } `}
          onClick={handleFilterClick}
          value={"favoriteStories"}
        >
          Favorite
        </button>
      </div>

      <StoriesList posts={storiesToBeDisplayed} />
    </section>
  );
}
