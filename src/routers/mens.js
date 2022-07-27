const express=require("express");
const  router=new express.Router();
const MensRanking=require("../models/mens");

// We will handle the post request
router.post("/mens",async(req,res)=>{
    try {
        const addingMensRecord=new MensRanking(req.body)
        console.log(req.body);
         const insertMens =await addingMensRecord.save();
         res.status(201).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
        
    }

})
// We will need to handle get request
router.get ("/mens",async(req,res)=>{
    try {
        const getMens =await MensRanking.find({}).sort({"ranking":1});
         res.send(getMens);
    } catch (e) {
        // console.log(e);
        res.status(400).send(e);
        
    }

})
// WE will handle get request of individual

router.get ("/mens/:id",async(req,res)=>{
    try {
        // upper wala id aur neeche wala id same hone chahiye
        const _id=req.params.id;
        const getMen =await MensRanking.findById({_id});
         res.send(getMen);
    } catch (e) {
        // console.log(e);
        res.status(400).send(e);
        
    }

})
// We will use patch method for  individual update data
router.patch ("/mens/:id",async(req,res)=>{
    try {
        
        const _id=req.params.id;
        const getMen =await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
         res.send(getMen);
    } catch (e) {
        // console.log(e);
        // 500 for sever releated error because data stored in our server
        res.status(500).send(e);
        
    }

})
// Handle delete request
router.delete ("/mens/:id",async(req,res)=>{
    try {
        
        const _id=req.params.id;
        const getMen =await MensRanking.findByIdAndDelete(_id);
         res.send(getMen);
    } catch (e) {
       
        res.status(500).send(e);
        
    }

})
module.exports=router;