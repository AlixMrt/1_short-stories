import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../features/stories/storiesSlice";
import TextDivider from "./TextDivider";
import { useNavigate } from "react-router-dom";

export default function AddStoryForm({ closeButton }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(1900);
  const [userId, setUserId] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [userName, setUserName] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onFavoriteChanged = (e) => setFavorite(e.target.value);
  const onUserNameChanged = (e) => setUserName(e.target.value);

  const navigate = useNavigate();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, date, userId, favorite, userName));
      setTitle("");
      setContent("");
      setUserId("");
      setFavorite(false);
      setUserName("");

      navigate("/stories");
    }
  };

  const canSave =
    Boolean(title) &&
    Boolean(content) &&
    Boolean(date) &&
    Boolean(userId) &&
    Boolean(userName);

  return (
    <div className="add-story">
      <h2 className="heading-2">
        New <br /> Short Story
      </h2>
      {closeButton}
      {/* <Link to={"/"} className="button | back-button">
        &larr;
      </Link> */}
      <TextDivider />
      <form className="add-story__form">
        <div className="add-story__form--inner-container">
          <div className="add-story__form--inner-container-column">
            <h3 className="heading-3">User Info</h3>

            <div>
              <label htmlFor="postAuthor">User Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={onUserNameChanged}
              />
            </div>

            <div className="favorite-container">
              <label htmlFor="favorite">This is your favorite story</label>
              <input
                type="checkbox"
                id="favorite"
                name="favorite"
                value={favorite}
                onChange={onFavoriteChanged}
              />
            </div>
          </div>
          <div className="add-story__form--inner-container-column">
            <h3 className="heading-3">Story Info</h3>
            <div>
              <label htmlFor="postTitle">Title:</label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
              />
            </div>
            <div>
              <label htmlFor="postAuthor">Author:</label>

              <input
                type="text"
                id="postAuthor"
                name="postAuthor"
                value={userId}
                onChange={onAuthorChanged}
              />
            </div>

            <div>
              <label htmlFor="date">Written in:</label>
              <input
                type="number"
                id="date"
                name="date"
                value={date}
                onChange={onDateChange}
              />
            </div>
          </div>
        </div>
        <div className="content-container">
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        {!canSave && (
          <p>
            Please make sure to provide your user name, the story title, author,
            date and content !
          </p>
        )}
        <button
          type="button"
          onClick={onSavePostClicked}
          className="button"
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </div>
  );
}
