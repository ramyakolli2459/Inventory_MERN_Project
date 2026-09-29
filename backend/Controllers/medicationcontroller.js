const Medication=require("../models/Medicationmodel");

async function createMedication(req,res,next){

    try{

const medication= await Medication.create(req.body)
    

res.status(201).json(medication)
}

catch(err){

    next(err)
}

}


async function getproduct(req,res,next){
    try{
    const Getproduct=await Medication.find()
    res.status(200).json(Getproduct)

}

catch (err){

    next(err)}}


async function getproductbyid(req,res,next){

    try{
        const id=req.params.id;
        const Getproductbyid=await Medication.findById(id)
        if(!Getproductbyid){
        
res.status(404).json({ message: "Medication not found" });

        }

        else{
            res.status(200).json(Getproductbyid);
        }

    }

        catch(err){

            next(err)


        }

        }
        
    
async function updateproduct(req,res,next){

    try{
    const id=req.params.id;

    
    const Updateproduct=await Medication.findByIdAndUpdate(id,req.body,{new:true,runValidators: true});
if(Updateproduct){
    res.status(200).json(Updateproduct);
}

else{
    res.status(404).json({message:"Not found"})
}
}

catch(err){

next(err)
}}


async function deleteproduct(req,res,next){

    try{


    const id=req.params.id;
    const Deleteproduct=await Medication.findByIdAndDelete(id);

    if(Deleteproduct){
    res.status(200).json(Deleteproduct);
}
else{
   res.status(404).json({message:"Not found"}) 
}
    }

catch(err){
    next(err)
}

}


module.exports= {createMedication,getproduct,getproductbyid,updateproduct,deleteproduct};