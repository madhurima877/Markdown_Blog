const express = require("express");;
const router=express.Router();
const Article=require("../models/Article");



router.get("/articles",async(req,res)=>{
    const articles =  await Article.find({});

    res.render("articles/index",{articles})
})

router.get("/articles/new", (req,res)=>{

    res.render("articles/new")

})
// create a new article

router.post("/articles",async(req,res)=>{

    const {name, desc} = req.body;

     await Article.create({name,desc});

     res.redirect("/articles")
})

router.get("/articles/:articleid", async(req,res)=>{

    const {articleid} = req.params;

      const article = await Article.findById(articleid);

      res.render("articles/show", {article})

});

// get edit form

router.get("/articles/:articleid/edit", async(req,res)=>{

    const {articleid} = req.params;

    const article = await Article.findById(articleid);

      res.render("articles/edit", {article})
})

router.patch("/articles/:articleid", async(req,res)=>{

    const {articleid} = req.params;

    const {name, desc} =req.body;

    await Article.findByIdAndUpdate(articleid, {name, desc});

    res.redirect("/articles")
})


router.delete("/articles/:articleid", async(req,res)=>{

   const {articleid} = req.params;

   await Article.findByIdAndDelete(articleid);
   res.redirect("/articles")
})



module.exports=router