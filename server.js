const express= require('express');
const app=express();
const path = require("path");
const methodOverride=require("method-override")
const port=3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.get('/',(req,res)=>{
    res.render("index");
})


app.listen(port, () => console.log(`Server listening at http://localhost:3000`.red))
