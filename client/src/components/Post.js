import React from 'react';
import {format} from "date-fns";
import { Link } from 'react-router-dom';

const Post = ({_id, title, summary,image, createdAt}) => {
  return (
    <div className="post">
        <div className="image">
            <Link to={`/post/${_id}`}>
                <img src={'http://localhost:4000/'+image}></img>
            </Link>
        </div>
        <div className="texts">
            <Link to={`post/${_id}`}>
                <h2>{title}</h2>
            </Link>
          <h3>{format(new Date(createdAt), '{dd-MM-yyyy}')}</h3>
          < h4>{summary}</h4>
        </div>
      </div>
  )
}

export default Post