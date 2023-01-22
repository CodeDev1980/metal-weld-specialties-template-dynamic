const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HawaiiProjectSchema = new Schema ({
    title: String,
    details: String,
    image: String,
    url: String,
    dateFinished: String,
    datePosted: {
        type: Date,
        default: new Date
    }
})

const HawaiiProject = mongoose.model('HawaiiProject', HawaiiProjectSchema)
module.exports = HawaiiProject