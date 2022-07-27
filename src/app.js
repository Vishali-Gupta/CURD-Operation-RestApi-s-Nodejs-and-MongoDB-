const express=require("express");
require("./db/conn");
const MensRanking=require("../src/models/mens");
const router = require("./routers/mens");
const app=express();
const port=process.env.port||8080;

// app.get("/",async(req,res)=>{
//     res.send("Hello from my side");

// })
app.use(express.json());
app.use(router);
app.listen(port,(e)=>{
    console.log(`Connection Sucesssfull Our app is live at port no ${port}`)
})