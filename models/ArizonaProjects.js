const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArizonaProjectSchema = new Schema ({
    title: String,
    details: String,
    image: String,
    location: String,
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

const ArizonaProject = mongoose.model('ArizonaProject', ArizonaProjectSchema)
module.exports = ArizonaProject