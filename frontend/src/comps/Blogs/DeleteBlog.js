import React, { useState } from 'react';
import Spinner from '../Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './DeleteBlog.css';

const DeleteBlog = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBlog = () => {
    setLoading(true);
    axios.delete(`https://blogera-im9g.vercel.app/blog/${id}`)
    // axios.delete(`http://localhost:3000/blog/${id}`)
      .then(() => {
        setLoading(false);
        handleSuccess('Blog deleted successfully');
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
      <h1 className='heading'>Delete Blog</h1>
      {loading ? <Spinner className='spinner' /> : ''}
      <div className='confirmation-container'>
        <h3 className='confirmation-text'>Are you sure you want to delete this blog?</h3>
        <button className='delete-button' onClick={handleDeleteBlog}>
          Yes, Delete it.
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteBlog;
