const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tradersjunction');//traders junction name of database

const Schema = mongoose.Schema; //taking Schema from mongoose

const UserSchema =new Schema({
    username:String,
    phonenumber:String,
    dob:String,
    email:String,
    password:String
});
//embed schema in model #Model Creation instance of model is a document
var Userdata = mongoose.model('userdata',UserSchema);//userdatas is a collection_name in db and Userdata is a model that is to be exported

module.exports = Userdata;//pass the Userdata model 