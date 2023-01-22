const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaliforniaProjectSchema = new Schema ({
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

const CaliforniaProject = mongoose.model('CaliforniaProject', CaliforniaProjectSchema)
module.exports = CaliforniaProject