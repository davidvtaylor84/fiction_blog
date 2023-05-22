import React from 'react';
import {format} from "date-fns";

const Post = ({title, summary, content, image, createdAt}) => {
  return (
    <div className="post">
        <div className="image">
          <img src={'http://localhost:4000/'+image}></img>
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <h3>{format(new Date(createdAt), '{dd-MM-yyyy}')}</h3>
          < h4>{summary}</h4>
        </div>
        <p className="summary">{content}</p>
      </div>
  )
}

export default Post