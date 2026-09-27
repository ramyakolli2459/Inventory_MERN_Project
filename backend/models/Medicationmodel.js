const mongoose=require("mongoose");
const medicationschema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
genericName:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    strength:{
        type:String,
        required:true
    },

    dosageForm:{
        type:String,
        required:true
    },

    manufacturer:{
        type:String,
        required:true
    },

    batchNumber:{
        type:String,
        required:true
    },

    expiryDate:{
        type:Date,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    reorderLevel:{
        type:Number,
        required:true
    },
unitPrice:{
        type:Number,
        required:true
    
}
})

const Medication = mongoose.model("Medication", medicationschema);

module.exports=Medication;


