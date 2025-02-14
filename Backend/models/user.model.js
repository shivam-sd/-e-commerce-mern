const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fulname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    }
});

const UserModel = mongoose.model("User" , UserSchema);

module.exports = UserModel;