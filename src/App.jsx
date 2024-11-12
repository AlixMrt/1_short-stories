import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SingleStoryPage from "./pages/SingleStoryPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="stories">
          <Route index element={<Stories />} />
          <Route path=":postId" element={<SingleStoryPage />} />
          <Route />
        </Route>
        <Route path="about" index element={<About />} />
      </Route>
    </Routes>

    // <main className="home">
    //   <h1 className="page-title | heading-1">A few Short Stories</h1>

    //   {addPostSectionDisplayed ? (
    //     <AddPostForm />
    //   ) : (
    //     <div>
    //       <h2 className="heading-2">Short Stories of the day</h2> <PostsList />
    //     </div>
    //   )}

    //   <img src={textDivider} alt="" />
    //   <button
    //     className="button | open-dialog-button"
    //     onClick={handleButtonClick}
    //   >
    //     {addPostSectionDisplayed ? "Back" : "Submit a short story"}
    //   </button>
    // </main>
  );
}

export default App;
