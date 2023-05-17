import React, { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

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

    async function createNewPost(e){
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
        })
        console.log(await response.json());
    }

  return (
    <form onSubmit={createNewPost}>
        <h2>Create New Post</h2>
        <input type='title' placeholder={'Title'} value={title} onChange={titleChangeHandler}/>
        <input type='summary' placeholder={'Summary'} value={summary} onChange={summaryChangeHandler}/>
        <input type='file' onChange={fileChangeHandler}/>
        <ReactQuill value={content} onChange={contentChangeHandler} placeholder={'Content goes here...'} modules={modules} formats={formats}/>
        <button style={{marginTop: '5px'}}>Create post</button>
    </form>
  )
}

export default CreatePost