import React from 'react'
import allBlogs from "../Blogs/blogsData";
import './Posts.css'

function PostWraper({id1,id2}) {

    const post1Data= allBlogs[id1];
    const post2Data = allBlogs[id2];

  return (
    <div className="posts">
    
    <div className="post">
      <div className="date">
        <p>{post1Data.date}</p>
      </div>
      <div className="post_title">
      <a href="https://chaseohlson.com/gravity-forms-javascript">
        <h4>{post1Data.title}</h4>
      </a>
      </div>
      <div className="post_detail">
        <p>
        {post1Data.discription}
        </p>
      </div>

      <div style={{ marginTop: "25px" }}>
      <a href={post1Data.link}>
        <button className="read-btn">READ MORE</button>
      </a>
    </div>
    </div>
    
    <div className="post">
      <div className="date">
        <p>{post2Data.date}</p>
      </div>
      <div className="post_title">
      <a href="https://chaseohlson.com/gatsby-link-anchor-navigation">
        <h4>{post2Data.title}</h4>
      </a>
      </div>
      <div className="post_detail">
        <p>
        {post2Data.discription}
        </p>
      </div>

      <div style={{ marginTop: "25px" }}>
      <a href={post2Data.link}>
        <button className="read-btn">READ MORE</button>
      </a>
    </div>
    </div>
    <span className="posts-after"></span>
  </div>
  )
}

export default PostWraper