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
  const [image, setImage] = useState(null); // State to hold the selected image file

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onFavoriteChanged = (e) => setFavorite(e.target.checked); // Make sure to use 'checked' for checkboxes
  const onUserNameChanged = (e) => setUserName(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Store the selected file
  };

  const navigate = useNavigate();

  const onSavePostClicked = () => {
    if (title && content) {
      // If there is an image, include it in the payload (as a base64 string, URL, or reference)
      const imageUrl = image ? URL.createObjectURL(image) : null; // For demo purposes, use object URL

      dispatch(
        postAdded(title, content, date, userId, favorite, userName, imageUrl)
      ); // Include imageUrl in payload
      setTitle("");
      setContent("");
      setUserId("");
      setFavorite(false);
      setUserName("");
      setImage(null); // Reset image after post

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
                checked={favorite}
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

        {/* Image upload
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <p>Selected image: {image.name}</p>}
        </div> */}

        {!canSave && (
          <p>
            Please make sure to provide your user name, the story title, author,
            date, content, and optionally an image!
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
