const ProjectPost = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const arizonaProjects = await ProjectPost.find({}).limit(3).sort({_id: -1}).populate('userid');;
    res.render('index', {
        title: "Home Page",
        arizonaProjects
    })
}