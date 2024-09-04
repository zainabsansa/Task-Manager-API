const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: [true, "fullName is required!"],
        trim: true,
        minLength: 3
    },
    email:{
        type: String,
        required: [true, "Email is required!"],
        lowerCase: true
    },
    password:{
        type: String,
        required: true,
        min:8
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User ;