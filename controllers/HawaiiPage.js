const HawaiiPost = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    const hawaiiProjects = await HawaiiPost.find({}).limit(30).sort({_id: -1}).populate('userid');
    res.render('hawaii', {
        title: "Our Projects In Hawaii",
        hawaiiProjects
    })
}