module.exports=function(req,res,next){
    if(req.token){
        console.log("Token Approved");
        next();
        return;
    }
    console.log("Entered");
}