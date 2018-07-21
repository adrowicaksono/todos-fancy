const mongoose = require('mongoose')
const Schema = mongoose.Schema


const taskSchema = new Schema({
    task : String,
    tag : [String],
    status : String,
    deadline: Date,
    userId: { type: Schema.Types.ObjectId, ref: 'User'}, 
},{timestamps: true})

const Task = mongoose.model("Task", taskSchema )

module.exports = Task