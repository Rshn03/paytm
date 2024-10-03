const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rishin07:Rm@102003@cluster0.l08hu.mongodb.net/");

const userSchema = mongoose.Schema({
    username : String,
    password:String,
    firstName:String,
    lastName:String,
})

const User =  mongoose.model("User", userSchema);

module.exports ={
    User
}

