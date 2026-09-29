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
        required:true,
        min:0
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
        required:true,
        min:0
    },

    reorderLevel:{
        type:Number,
        required:true,
        min:0
    },
unitPrice:{
        type:Number,
        required:true,
        min:0
    
}
})

const Medication = mongoose.model("Medication", medicationschema);

module.exports=Medication;


