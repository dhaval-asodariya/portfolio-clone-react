import React from "react";
import "./Posts.css";

import PostWraper from "./PostWraper";


function Posts({id1,id2}) {
 
  return (
    <section className="Posts_section">
      <div className="post_container">
        <h2 className="title">RECENT POSTS</h2>
       <PostWraper id1={id1} id2={id2} />
      </div>
    </section>
  );
}

export default Posts;
