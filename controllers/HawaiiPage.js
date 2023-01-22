const HawaiiPost = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    const hawaiiProjects = await HawaiiPost.find({}).limit(30).sort({_id: -1});
    res.render('hawaii', {
        title: "Our Projects In Hawaii",
        hawaiiProjects
    })
}