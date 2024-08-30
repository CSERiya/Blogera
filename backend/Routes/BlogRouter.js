const express= require('express');
const Blog= require('../Models/Blog');
const router = express.Router()

// Route for adding the details
router.post('/add', async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.blogger ||
        !request.body.content
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, blogger, content',
        });
      }
  
      // Creating new blog
      const newBlog = {
        title: request.body.title,
        blogger: request.body.blogger,
        content: request.body.content,
      };
  
      // Include content if it exists
      if (request.body.content) {
        newBlog.content = request.body.content;
      }
  
      const blog = await Blog.create(newBlog);
      return response.status(201).send(blog);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
    
    // Route to getting all the written blogs
    router.get('/add',async(request,response)=>{
        try{
            const blogs=await Blog.find({});
            return response.status(200).json({
                count:blogs.length,
                data:blogs
            });
        }
        catch(error){
            console.log(error.message);
            response.status(500).send({message:error.message});
        }
    })
    
    // Route for Getting Single Blog from the database by ID
    router.get('/:id', async (request, response) => {
        try {
            const { id } = request.params;
            if (!id) {
              console.log('ID is undefined.');
              return response.status(404).json({ message: 'Blog not found' });
            }
      
          const blog = await Blog.findById(id);
      
          if (!blog) {
            return response.status(404).json({ message: 'Blog not found' });
          }
      
          return response.status(200).json(blog);
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: 'Internal Server Error' });
        }
      });
    
    // Route for Updating a blog
    router.put('/:id',async(request, response)=>{
        try{
    if(
        !request.body.title || 
        !request.body.blogger ||
        !request.body.content
    ){
        return response.status(400).send({
            message:'Send all required fields: title, blogger, content',
    });
    }
    const {id}=request.params;
    const result=await Blog.findByIdAndUpdate(id, request.body);
    
    if(!result){
        return response.status(404).json({message:'Blog not found'});
    }
    return response.status(200).send({message:'Blog updated successfully'});
        }
        catch(error){
            console.log(error.message);
    response.status(500).send({message:error.message});
        }
    });
    
    // Route for Deleting a blog
    router.delete('/:id',async(request,response)=>{
    try{
    const {id}=request.params;
    const result=await Blog.findByIdAndDelete(id);
    
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