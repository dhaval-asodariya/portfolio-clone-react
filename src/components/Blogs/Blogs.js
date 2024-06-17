import React from "react";
import './Blogs.css'
import PostWraper from "../Posts/PostWraper";

function Blogs() {

  return (
    <div className="blogSection">
      <div className="blog-head">
        <div className="head-inner">
          <h1>THE</h1>
          <h1>LATEST</h1>
        </div>
      </div>
      <div className="blogs-wraper">
        <div className="blog-wrap-inner">
        <PostWraper id1={0} id2={1} />
        <PostWraper id1={2} id2={3} />
        <PostWraper id1={4} id2={5} />
        <PostWraper id1={6} id2={7} />
        <PostWraper id1={8} id2={9} />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
