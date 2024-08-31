const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const AuthRouter = require('./Routes/AuthRouter');
const BlogRouter = require('./Routes/BlogRouter');

const PORT = process.env.PORT || 8080;
const db_url = process.env.DB_URL;
app.use(express.json());
app.use(cors());
mongoose.connect(db_url)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
  app.get('/', (req, res) => {
    res.send('Welcome to the Blog API!');
  });  
app.use(bodyParser.json());

app.use('/auth', AuthRouter);
app.use('/blog', BlogRouter); 

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
