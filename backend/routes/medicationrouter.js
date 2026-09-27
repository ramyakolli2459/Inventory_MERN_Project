const express=require("express");
const router=express.Router();
const {createMedication,getproduct,getproductbyid,updateproduct,deleteproduct} = require("../Controllers/medicationcontroller");
router.post("/AddMedicine",createMedication);
router.get("/getproducts",getproduct);
router.get("/getproducts/:id",getproductbyid);
router.put("/updateproduct/:id",updateproduct);
router.delete("/deleteproduct/:id",deleteproduct)
module.exports=router;