const CaliforniaPost = require('../models/CaliforniaProjects');

module.exports = async (req, res) => {
    const californiaProjects = await CaliforniaPost.find({}).limit(30).sort({_id: -1});
    res.render('california', {
        title: "Our Projects In California",
        californiaProjects
    })
}