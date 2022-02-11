const mongoose = require('mongoose');

const toDoShema = new mongoose.Schema({
    toDo: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    creator: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('to-do', toDoShema);