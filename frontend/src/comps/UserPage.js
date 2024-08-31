import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BlogCard from './BlogCard';
import './UserPage.css';

const UserPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('loggedInUser');
    const storedUserId = localStorage.getItem('loggedInUserId'); 

    if (storedUserName && storedUserId) {
      setUserName(storedUserName);
      setUserId(storedUserId);
    } else {
      console.error('User name or ID not found in localStorage');
    }

    if (storedUserId) {
      setLoading(true);
      axios.get(`https://blogera-ub1p.vercel.app/blog/blogs/user/${storedUserId}`)  
      // axios.get(`https://blogera-mu.vercel.app/blog/blogs/user/${storedUserId}`)
        .then((response) => {
          setBlogs(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className='page-padding'>
      <h1 className='welcome-text'>Welcome, {userName}!</h1>
      <div className='flex-container'>
        <h2 className='blog-title'>Your Blogs</h2>
        <Link to='/blogs/create'>
          <MdOutlineAddBox className='add-icon' /> <span className='add-icon-p'>Add Blog</span>
        </Link>
      </div>
      {loading ? <Spinner /> : blogs.length > 0 ? <BlogCard blogs={blogs} /> : <p>No blogs available.</p>}
    </div>
  );
};

export default UserPage;
