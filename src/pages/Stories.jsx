import { useEffect, useState } from "react";
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

  function handleFilterClick(e) {
    if (e.target.value === "posts") {
      setStoriesToBeDisplayed(posts);
    } else if (e.target.value === "favoriteStories") {
      setStoriesToBeDisplayed(favoriteStories);
    }
  }

  useEffect(() => {});
  return (
    <section className="stories">
      {storiesToBeDisplayed === posts && (
        <h1 className="heading-1"> All our {posts.length} Short Stories</h1>
      )}
      {storiesToBeDisplayed === favoriteStories && (
        <h1 className="heading-1">
          Our {favoriteStories.length} favorite Short Stories
        </h1>
      )}

      <div className="filters">
        <button
          className={`button | ${storiesToBeDisplayed === posts && "active"} `}
          onClick={handleFilterClick}
          value={"posts"}
        >
          All
        </button>
        <button
          className={`button | ${
            storiesToBeDisplayed === favoriteStories && "active"
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
