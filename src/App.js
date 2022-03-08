import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js"
import Blog from "./components/Blog.js"
import SinglePost from "./components/SinglePost.js"
import Post from "./components/Post.js"
import NavBar from "./components/Navbar.js";

function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route element={<Blog />} path='/blog' />
        <Route element={<SinglePost />} path='/post:slug' />
        <Route element={<Post />} path='/post' />

      </Routes>
    
    </BrowserRouter>
  )

}

export default App;
