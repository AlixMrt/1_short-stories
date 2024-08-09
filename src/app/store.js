import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/stories/storiesSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
