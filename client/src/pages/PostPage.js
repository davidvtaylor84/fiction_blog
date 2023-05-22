import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns';
import { UserContext } from '../UserContext';

const PostPage = () => {

    const {userInfo} = useContext(UserContext);

    const [post, setPost] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(res => res.json()
        .then(postInfo =>{
            setPost(postInfo);
        }))
    }, []);

    if(!post){ return <p>Nothing to see here</p>}

  return (
    <div className='post-page'>
        <h1>{post.title}</h1>
        <div className='image'>
            <img src={`http://localhost:4000/${post.image}`}/>
        </div>
        <div className='content' dangerouslySetInnerHTML={{__html: post.content}}/>
        {userInfo && (
            <div className='edit-row'>
                <a className='edit-btn' href=''>Edit Post</a>
            </div>
        )}
        <time>{format(new Date(post.createdAt), 'dd-MM-yyyy')}</time>
    </div>
  )
}

export default PostPage