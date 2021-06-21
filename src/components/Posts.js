import React from "react";
import Post from "./Post";

export default ({posts}) => (
  posts.map((post, i)=>(
    <Post key={i} post={post}/>
  ))
)