import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SingleStoryPage from "./pages/SingleStoryPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

function App() {
  return (
    // Set the basename to '/1_short-stories' to handle subdirectory routing
    <HashRouter basename="/1_short-stories">
      <Routes>
        {/* Catch-all route for all subpages */}
        <Route path="*" element={<Layout />}>
          {/* Default route */}
          <Route index element={<Home />} />

          {/* Stories routes */}
          <Route path="stories">
            <Route index element={<Stories />} />
            <Route path=":postId" element={<SingleStoryPage />} />
          </Route>

          {/* About route */}
          <Route path="about" element={<About />} />

          {/* 404 route */}
          <Route
            path="*"
            element={
              <div>
                404 - Page Not Found. <a href="/">Go Home</a>
              </div>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
