const mongoose = require('mongoose');
const { Schema } =  mongoose;

const Note = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    tittle: {
        type: String,
        required: true
    },

    discription: {
        type: String,
        required: true
    },

    tag:{
        type: String,
        default: "General"
    },

    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', Note);