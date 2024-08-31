const express= require('express');
const app=express();
const bodyParser= require('body-parser');
const cors= require('cors');
require ('dotenv').config();
const mongoose= require('mongoose');
const AuthRouter = require('./Routes/AuthRouter');
const BlogRouter= require('./Routes/BlogRouter');

const PORT = 8080;

mongoose.connect(db_url)
.then(()=>{
  console.log("MongoDB Connected Successfully!");
}).catch((err)=>{
  console.log("MongoDB Connection Error: ",err);
})

app.use(bodyParser.json());
app.use(cors({
  origin: "https://blogera-6bgf.vercel.app/", 
  credentials: true,
}));
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});  
app.use('/auth',AuthRouter)
app.use('/blog',BlogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

 
