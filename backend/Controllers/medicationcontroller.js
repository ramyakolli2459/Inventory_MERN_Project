const Medication=require("../models/Medicationmodel");

async function createMedication(req,res){

const medication= await Medication.create(req.body)
    

res.json(medication)
}


async function getproduct(req,res){
    const Getproduct=await Medication.find()
    res.json(Getproduct)
}
async function getproductbyid(req,res){
        const id=req.params.id;
        const Getproductbyid=await Medication.findById(id)
        res.json(Getproductbyid);
    }
async function updateproduct(req,res){
    const id=req.params.id;
    const Updateproduct=await Medication.findByIdAndUpdate(id,req.body,{new:true});

    res.json(Updateproduct);
}

async function deleteproduct(req,res){
    const id=req.params.id;
    const Deleteproduct=await Medication.findByIdAndDelete(id);
    res.json(Deleteproduct);
}
module.exports= {createMedication,getproduct,getproductbyid,updateproduct,deleteproduct};