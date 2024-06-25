module.exports = function (req,res,next){
    console.log('Creating token');
    const TOKEN = "123";
    req.token=TOKEN
    next()
}

