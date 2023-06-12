const mongoose = require("mongoose");
const Article = require("./models/Article")

mongoose.connect("mongodb://127.0.0.1:27017/markdown")
.then(()=> console.log("db connected sucessfully".blue))
.catch((err)=> console.log(err));


const articles = [

    {
        name: 'MON',
        desc: "njsjxnxos"
    },
    {
        name: 'tue',
       
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'wed',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'thru',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'fri',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'sat',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'sun',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },

]

 async function seedArticles(){


     await Article.deleteMany({})
     await Article.insertMany(articles);

    console.log("articles have been seeded sucessfully")

}

seedArticles()