const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required!"],
        min: 5,
        trim: true
    },
    description:{
        type: String,
        required: true,
        minLength: 10
    },
    status: {
        type: String,
        required: true
    },
    dueTime: {
        type: String
    }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;