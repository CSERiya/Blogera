const express= require('express');
const app=express();
const bodyParser= require('body-parser');
const cors= require('cors');
require ('dotenv').config();
const mongoose= require('mongoose');
const AuthRouter = require('./Routes/AuthRouter');
const BlogRouter= require('./Routes/BlogRouter');

const PORT = process.env.PORT || 8080;
const db_url=process.env.DB_URL;

mongoose.connect(db_url)
.then(()=>{
  console.log("MongoDB Connected Successfully!");
}).catch((err)=>{
  console.log("MongoDB Connection Error: ",err);
})

app.use(bodyParser.json());
  app.use(cors({
  origin: 'https://blogera-bsi5-k2tmjorks-riya-kumaris-projects-2d0a8c42.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
}
));
app.use('/auth',AuthRouter)
app.use('/blog',BlogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
