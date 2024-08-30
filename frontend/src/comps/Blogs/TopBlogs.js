import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogModel from '../BlogModel';
import './TopBlogs.css'; 
import Spinner from '../Spinner';

const TopBlogs = () => {
  const [blogs, setBlogs] = useState([]);  
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/blog/add'); 
        if (response.data && response.data.data) {  
          setBlogs(response.data.data); 
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching top blogs:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchTopBlogs();
  }, []);

  const truncateContent = (content) => {
    const words = content.split(/\s+/); 
    const truncated = words.slice(0, 50).join(' '); 
    return words.length > 50 ? `${truncated}...` : truncated; 
  };

  const handleShowModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  return (
    <div className='top-blogs-container1'>
      {loading ? (
        <Spinner/>
      ) : blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className='blog-card1'>
            <div className='blog-header1'>
              <h2 className='blog-title1'>{blog.title}</h2>
            </div>

            <div className='blogger1'>
              <p className='content-text1'>-{blog.blogger}</p>
            </div>

            <div className='blog-content1'>
              <p className='content-text1'>{truncateContent(blog.content)}</p>
            </div>

            <div className='action-container1'>
              <p 
                className='action-icon1'
                onClick={() => handleShowModal(blog)}>Read More
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}

      {showModal && selectedBlog && (
        <BlogModel blog={selectedBlog} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default TopBlogs;

