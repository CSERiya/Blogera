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

  useEffect(() => {
    const storedUserName = localStorage.getItem('loggedInUser');
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      console.error('User name not found in localStorage');
    }

    setLoading(true);
    axios
      .get('http://localhost:8080/blog/add')
      .then((response) => {
        setBlogs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='page-padding'>
      <h1 className='welcome-text'>Welcome, {userName}!</h1>
      <div className='flex-container'>
        <h2 className='blog-title'>Your Blogs</h2>
        <Link to='/blogs/create'>
          <MdOutlineAddBox className='add-icon' /> Add Blog
        </Link>
      </div>
      {loading ? <Spinner /> : <BlogCard blogs={blogs} />}
    </div>
  );
};

export default UserPage;
