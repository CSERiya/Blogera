import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BlogModel from './BlogModel';
import './BlogSingleCard.css'; 

const BlogSingleCard = ({ blog }) => {
  const [showModal, setShowModal] = useState(false);

  const truncateContent = (content) => {
    const words = content.split(/\s+/); 
    const truncated = words.slice(0, 50).join(' '); 
    return words.length > 50 ? `${truncated}...` : truncated; 
  };

  return (
    <div key={blog._id} className='blog-card'>
      <div className='blog-header'>
        <PiBookOpenTextLight className='blog-icon' />
        <h2 className='blog-title'>{blog.title}</h2>
      </div>

      <div className='blog-content'>
        <p className='content-text'>{truncateContent(blog.content)}</p>
      </div>

      <div className='action-container'>
        <BiShow
          className='action-icon'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/blogs/details/${blog._id}`}>
          <BsInfoCircle className='action-icon info-icon' />
        </Link>

        <Link to={`/blogs/edit/${blog._id}`}>
          <AiOutlineEdit className='action-icon edit-icon' />
        </Link>

        <Link to={`/blogs/delete/${blog._id}`}>
          <MdOutlineDelete className='action-icon delete-icon' />
        </Link>
      </div>

      {showModal && <BlogModel blog={blog} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BlogSingleCard;


