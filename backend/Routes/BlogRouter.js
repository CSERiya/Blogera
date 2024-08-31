const mongoose=require('mongoose');
const express= require('express');
const BlogModel = require('../Models/Blog');
const router = express.Router()
    
router.post('/add', async (request, response) => {
  try {
    const { title, blogger, content } = request.body;

    // Validate required fields
    if (!title || !blogger || !content) {
      return response.status(400).send({
        message: 'Send all required fields: title, blogger, content',
      });
    }

    // Create new blog object
    const newBlog = { title, blogger, content };
    const blog = await BlogModel.create(newBlog);
    return response.status(201).send(blog);
  } catch (error) {
    console.error('Error while adding blog:', error.message); 
    response.status(500).send({ message: error.message });
  }
});

    // Route to getting all the written blogs
// router.get('/add', async (request, response) => {
//   try {
//     const blogs = await BlogModel.find({})
//       .populate('blogger', 'name'); 

//     return response.status(200).json({
//       count: blogs.length,
//       data: blogs
//     });
//   } catch (error) {
//     console.error('Error fetching blogs:', error.message);
//     response.status(500).send({ message: error.message });
//   }
// });
router.get('/add', async (request, response) => {
  try {
    const blogs = await BlogModel.find({})
      .populate('blogger', 'name');
      
    return response.status(200).json({
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
    response.status(500).send({ message: error.message });
  }
});

    
    // Route for Getting Single Blog from the database by ID
    router.get('/:id', async (request, response) => {
      try {
        const { id } = request.params;
        if (!id) {
          console.log('ID is undefined.');
          return response.status(404).json({ message: 'Blog not found' });
        }
        const blog = await BlogModel.findById(id).populate('blogger', 'name');
    
        if (!blog) {
          return response.status(404).json({ message: 'Blog not found' });
        }
    
        return response.status(200).json(blog);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: 'Internal Server Error' });
      }
    });
    
    // Get blog by a user
      router.get('/blogs/user/:userId', async (req, res) => {
        const { userId } = req.params;
        try {
          // Validate the userId
          if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: 'Invalid User ID' });
          }
          const blogs = await BlogModel.find({ blogger: userId }).populate('blogger', 'name');
          res.json({ success: true, data: blogs });
        } catch (error) {
          console.error('Error fetching blogs for user:', error);
          res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
      });
    
    // Route for Updating a blog
    router.put('/:id', async (request, response) => {
      try {
        const { title, blogger, content } = request.body;
    
        if (!title || !blogger || !content) {
          return response.status(400).send({
            message: 'Send all required fields: title, blogger, content',
          });
        }
    
        const { id } = request.params;
        const result = await BlogModel.findByIdAndUpdate(id, { title, blogger, content }, { new: true });
    
        if (!result) {
          return response.status(404).json({ message: 'Blog not found' });
        }
    
        return response.status(200).send({ message: 'Blog updated successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });
    
    
    // Route for Deleting a blog
    router.delete('/:id',async(request,response)=>{
    try{
    const {id}=request.params;
    const result=await BlogModel.findByIdAndDelete(id);
    
    if(!result){
        return response.status(404).json({message:'Blog not found'});
    }
    return response.status(200).send({message:'Blog deleted successfully!'});
    }
    catch(error){
         console.log(error.message);
    response.status(500).send({message:error.message});
    }
    });
    module.exports =router;  