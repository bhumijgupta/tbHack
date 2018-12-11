var express=require("express"),
    bodyParser=require("body-parser"),
    port=process.env.PORT || 3000,
    mongoose=require("mongoose"),
    app=express()
//mongoose.connect("mongodb://localhost/emailer");	

mongoose.connect("mongodb://Yash123:yash1234@ds039768.mlab.com:39768/tbhack");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var apiroutes=require("./routes/apiRoutes"),
    apiroutesDoc=require("./routes/apiRoutesDoc");
app.use("/api/user",apiroutes);
app.use("/api/doc",apiroutesDoc);
app.get("/",function(req,res){
    res.send("The api route is at /api/user");
})
app.listen(port,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    console.log("Server running at port "+ port);
})