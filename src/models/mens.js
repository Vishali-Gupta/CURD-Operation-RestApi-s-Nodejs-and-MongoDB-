const express=require("express");
const mongoose  = require("mongoose");
const mensSchema =new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
})
// We are creating a new collection
const MensRanking=new mongoose.model("menRanking",mensSchema)
module.exports=MensRanking;