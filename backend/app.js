const express = require('express');
const UserData = require('./src/model/Userdata');
const cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());

app.post('/adduser',function(req,res){
   
    console.log(req.body);
   
    var user = {       
        username : req.body.user.username,
        phonenumber : req.body.user.phonenumber,
        dob : req.body.user.dob,
        email : req.body.user.email,
        password : req.body.user.password,
        
   }       
   var user = new UserData(user);
   user.save();
});
app.get('/users',function(req,res){
    
    UserData.find()
                .then(function(users){
                    res.send(users);
                });
});
app.delete('/delete/:id',(req,res)=>{
   
    id = req.params.id;
    UserData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });
    

app.listen(3300,()=>{
    console.log("listening at port 3300");
})