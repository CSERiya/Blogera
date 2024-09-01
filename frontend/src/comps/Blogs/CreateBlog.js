import React, { useState } from 'react';
import Spinner from '../Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './CreateBlog.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [blogger, setBlogger] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBlog = () => {
    const bloggerId = localStorage.getItem('loggedInUserId');  
    const data = {
      title,
      blogger: bloggerId, 
      ...(content && { content }),
    };
    setLoading(true);
    axios.post('https://blogera-im9g.vercel.app/blog/add', data)
    //  axios.post('http://localhost:3000/blog/add', data)
      .then(() => {
        setLoading(false);
        handleSuccess('Blog created successfully');
        navigate('/userpage');
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error response:', error.response);
        handleError('Error: ' + (error.response?.data?.message || error.message));
      });
  };
  

  return (
    <div className='container1'>
      <h1 className='heading'>Create Blog</h1>
      {loading ? <Spinner className='spinner' /> : ''}
      <div className='form-container'>
        <div className='form-group'>
          <label className='form-label'>Title<span className='required-asterisk'>*</span></label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Please enter texts only'
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Blogger<span className='required-asterisk'>*</span></label>
          <input
            type='text'
            value={blogger}
            onChange={(e) => setBlogger(e.target.value)}
            placeholder='Please enter texts only'
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Content<span className='required-asterisk'>*</span></label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Enter your body content...'
            className='form-textarea'
          />
        </div>
        <p className='warning-text'>
          <b>All Fields are mandatory.</b>
        </p>
        <button className='save-button' onClick={handleSaveBlog}>
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;
