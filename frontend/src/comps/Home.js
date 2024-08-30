import React from 'react'
import './Home.css';
import {CgMouse} from 'react-icons/cg'
import TopBlogs from './Blogs/TopBlogs'

const Home = () =>{
  return (
    <>
    <div className='home'>
         <p>Welcome to Blogera</p>
        <h1>AMAZING PLATFORM FOR SHARING YOUR THOUGHTS</h1>

        <a href="#top-blogs-container1">
            <button>
            Browse 
            <CgMouse/>
            </button>
        </a>
      </div>

      <h2 className='homeHeading'>Top Blogs</h2>
      <div id='top-blogs-container1'>
<TopBlogs/>
      </div>
</>
  )
}

export default Home