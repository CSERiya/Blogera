import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import './BlogModel.css';

const BlogModel = ({ blog, onClose }) => {
  return (
    <div
      className='modal-overlay'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='modal-content'
      >
        <AiOutlineClose
          className='modal-close'
          onClick={onClose}
        />
        <div className='blog-title-container'>
          <PiBookOpenTextLight className='blog-title-icon' />
          <h2 className='my-1'>{blog.title}</h2>
        </div>
       
        <div className='blog-content-container'>
          <span className='blog-title-icon'></span>
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogModel;
