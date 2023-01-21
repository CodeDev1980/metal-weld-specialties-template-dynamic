const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NevadaProjectSchema = new Schema ({
    title: String,
    details: String,
    image: String,
    url: String,
    dateFinished: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const NevadaProject = mongoose.model('NevadaProject', NevadaProjectSchema)
module.exports = NevadaProject