import React from 'react'
import { Link } from 'react-router-dom'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/monalisa'} className='post-author'>
    <div className="post-author-avatar">
        <img src={require("../images/avatar1.jpg")} alt="" />
    </div>
    <div className="post-author-details">
        <h5>By: Samuel Roy</h5>
        <small>Just Now</small>
    </div>
    </Link>
  )
}

export default PostAuthor;
