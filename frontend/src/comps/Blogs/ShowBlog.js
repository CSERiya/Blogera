import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import './ShowBlog.css';

const ShowBlog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      // axios.get(`http://localhost:8080/blog/${id}`)
      axios.get(`https://blogera-mu.vercel.app/blog/${id}`)
        .then((response) => {
          setBlog(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div className='container1'>
      <h1 className='heading'>Show Blog</h1>
      {loading ? (
        <Spinner className='spinner' />
      ) : (
        <div className='blog-card'>
          <div className='info'>
            <span className='label'>Title:</span>
            <span>{blog.title}</span>
          </div>
          <div className='info'>
            <span className='label'>Blogger:</span>
            <span>{blog.blogger?.name}</span> 
          </div>
          <div className='info'>
            <span className='label'>Content:</span>
            <span>{blog.content}</span>
          </div>
          <div className='info'>
            <span className='label'>Create Time:</span>
            <span>{new Date(blog.createdAt).toString()}</span>
          </div>
          <div className='info'>
            <span className='label'>Last Update Time:</span>
            <span>{new Date(blog.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBlog;
