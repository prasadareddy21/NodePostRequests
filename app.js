let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let friends = ['siva','bhargav','madhu','dean','rohit'];

app.set("view engine","ejs");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
})

app.get("/friends",function(req,res){
    
    res.render("friends",{friends:friends});
})


app.post("/addfriend",function(req,res){
    let newFrnd = req.body.newFriend;
   
    friends.push(newFrnd);
    res.redirect("/friends");
});



app.listen(3000,function(req,res){
    console.log("The Server is started");
})