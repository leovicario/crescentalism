import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog.js"
import SinglePost from "./components/SinglePost.js"
import Post from "./components/Post.js"
import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Blog />} />
        <Route element={<Blog />} path='/blog' />
        <Route element={<SinglePost />} path='/post:slug' />
        <Route element={<Post />} path='/post' />

      </Routes>
      <Footer />
    </BrowserRouter>
    
  )

}

export default App;
