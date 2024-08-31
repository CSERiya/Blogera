import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './EditBlog.css';

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [bloggerId, setBloggerId] = useState('');
  const [bloggerName, setBloggerName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/blog/${id}`)
      .then((response) => {
        setBloggerId(response.data.blogger._id); 
        setBloggerName(response.data.blogger.name); 
        setTitle(response.data.title);
        setContent(response.data.content);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        handleError('An error happened. Please check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBlog = () => {
    const data = {
      title,
      blogger: bloggerId, 
      content,
    };
    setLoading(true);
    axios.put(`http://localhost:8080/blog/${id}`, data)
      .then(() => {
        setLoading(false);
        handleSuccess('Blog Edited Successfully');
        navigate('/userpage');
      })
      .catch((error) => {
        setLoading(false);
        handleError('Error');
        console.log(error);
      });
  };

  return (
    <div className='container1'>
      <h1 className='heading'>Edit Blog</h1>
      {loading ? <Spinner className='spinner' /> : ''}
      <div className='form-container'>
        <div className='input-group'>
          <label className='label'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='input'
          />
        </div>
        <div className='input-group'>
          <label className='label'>Blogger</label>
          <input
            type='text'
            value={bloggerName}
            onChange={(e) => setBloggerName(e.target.value)}
            className='input'
            disabled
          />
        </div>
        <div className='input-group'>
          <label className='label'>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='textarea'
          />
        </div>
        <button className='save-button' onClick={handleEditBlog}>
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditBlog;
