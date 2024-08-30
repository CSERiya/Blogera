import BlogSingleCard from "./BlogSingleCard";
import './BlogCard.css';

const BlogCard = ({ blogs }) => {
  return (
    <div className='blog-grid'>
      {blogs.map((item) => (
        <BlogSingleCard key={item._id} blog={item} />
      ))}
    </div>
  );
}

export default BlogCard;
