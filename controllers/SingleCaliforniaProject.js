const OurCaliforniaProject = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const CaliforniaProject = await OurCaliforniaProject.findById(req.params.id).populate('userid');
    res.render('projectC', {
        title: "Project Information",
        CaliforniaProject
    })
}
