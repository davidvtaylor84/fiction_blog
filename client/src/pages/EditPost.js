import React, { useEffect } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';

const EditPost = () => {

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(res => {res.json()
        .then(postInfo =>{
            setTitle(postInfo.title);
            setSummary(postInfo.summary);
            setContent(postInfo.content);
        })
    })}, [])

    const titleChangeHandler = (e)=>{
        setTitle(e.target.value);
    }

    const summaryChangeHandler = (e) =>{
        setSummary(e.target.value);
    }

    const contentChangeHandler = (newValue) => {
        setContent(newValue);
    }

    const fileChangeHandler = (e) =>{
        setFiles(e.target.files)
    }

    const modules = {
        toolbar: [
            [{'header': [1,2, false]}],
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'link', 'image'
    ];

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if(files?.[0]){
            data.set('file', files?.[0]);
        }
        e.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        })
        if(response.ok){
            setRedirect(true);
        }  
    }

    if(redirect){
        return <Navigate to={`/post/${id}`}/>
    }

  return (
    <form onSubmit={updatePost}>
        <h2>Create New Post</h2>
        <input type='title' placeholder={'Title'} value={title} onChange={titleChangeHandler}/>
        <input type='summary' placeholder={'Summary'} value={summary} onChange={summaryChangeHandler}/>
        <input type='file' onChange={fileChangeHandler}/>
        <ReactQuill value={content} onChange={contentChangeHandler} placeholder={'Content goes here...'} modules={modules} formats={formats}/>
        <button style={{marginTop: '5px'}}>Update post</button>
    </form>
  )
}

export default EditPost