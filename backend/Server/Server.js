const express=require("express");
const cors=require("cors");
require("dotenv").config();
const Connect= require("../config/db.js")

const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({message:"API is running"})
});

Connect()
    .then(()=>{
      app.listen(process.env.PORT,()=>{
    console.log(`Server is ruuning on port ${process.env.PORT}`)  
})})

.catch((error)=>{
    throw error;

})


