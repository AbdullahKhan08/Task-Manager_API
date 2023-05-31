const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        trim: true,
        maxLength: [20, 'length should not be greater than 20']
    },
    completed: {
        type: Boolean,
        default: false

    }
});

module.exports = mongoose.model('task', taskSchema)