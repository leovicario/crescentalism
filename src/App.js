import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog.js"
import SinglePost from "./components/SinglePost.js"
import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Blog />} />
        <Route element={<Blog />} path='/blog' />
        <Route element={<SinglePost />} path='/post/:slug' />
      </Routes>
    <Footer />
    </BrowserRouter>
    
    
  )
}

export default App;
