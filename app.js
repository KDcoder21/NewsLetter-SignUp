const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var emailPerson = req.body.email;
})

app.listen(3000,function(){
    console.log("server started");
});
//c33f9733a41e38abf2211fd09b8ef5a1-us12