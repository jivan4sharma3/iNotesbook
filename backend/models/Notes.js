const mongoose = require('mongoose');


const NotesSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true,
    },
    tag:{
        type: String,
        default:"General"
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("notes",NotesSchema)