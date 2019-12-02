import React from "react"
import List from "./List"
import FormList from "../container/FormList"
import Post from "../container/Post"

const App=()=>(
    <div>
        <h2>Articles</h2>
        <List />
        <h2>Input hear</h2>
        <FormList></FormList>
        <h1>Post hear</h1>
        <Post />
    </div>
)

export default App