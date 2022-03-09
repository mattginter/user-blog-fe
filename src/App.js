import React, { useState } from "react"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./views/home"
import Blog from "./views/blog"
import NewBlogPost from "./views/new"
import NewAuthor from "./views/author"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  // const [list, setList] = useState([])
  const [posts, setPosts] = useState([])
  const [searched, setSearched] = useState([])

  return (
    <BrowserRouter>
      <NavBar searched={setSearched} />
      <Route exact path="/">
        <Home setPosts={setPosts} posts={posts} searched={searched} />
      </Route>
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      <Route path="/newAuthor" exact component={NewAuthor} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
