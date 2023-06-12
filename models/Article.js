const mongoose=require("mongoose");
const articleSchema=new mongoose.Schema({
    name:String,
    desc:String
})

const Article=mongoose.model("Article",articleSchema);
module.exports=Article