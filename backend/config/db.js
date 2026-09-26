const mongoose = require("mongoose");

const connection=mongoose.connect(process.env.MONGO_URL)

async function Connect(){

    try{

    await (mongoose.connect(process.env.MONGO_URL))
    console.log("DB Connection succesfull")
    }

    catch(error){

        console.log("Connection failed")
    }

}

module.exports=Connect;