const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task_name: String,
    task_description: String,
    task_status: String
});

module.exports = mongoose.model('Task', TaskSchema);