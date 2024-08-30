const mongoose =require("mongoose");

const Schema= mongoose.Schema;

const BlogSchema= new Schema({
    title:{
        type: String,
        required:true,
       },
       blogger:{
        type: String,
        required:true,
       },
       content:{ 
        type:String,
    required:true,
       },
    },
    {
        timestamps:true,
    }
    );

const BlogModel=mongoose.model('Blog', BlogSchema);
module.exports= BlogModel;