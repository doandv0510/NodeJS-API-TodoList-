const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var todo = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
    },
}, { timestamps: true });

//Export the model
module.exports = mongoose.model("todo", todo);