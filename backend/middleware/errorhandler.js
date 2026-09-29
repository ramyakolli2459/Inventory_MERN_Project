const Errorhandler=function errorhandler(err,req,res,next){
console.log(err);

if(err.name==="ValidationError"){
    res.status(400).json({message:"validation failed"})
}
else{
    res.status(500).json({message:"Server error"})
    
    
}
}
module.exports=Errorhandler;
