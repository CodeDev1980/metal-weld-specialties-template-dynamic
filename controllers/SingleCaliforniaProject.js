const OurCaliforniaProject = require('../models/CaliforniaProjects');

module.exports = async (req, res) => {
    const CaliforniaProject = await OurCaliforniaProject.findById(req.params.id);
    res.render('projectC', {
        title: "Project Information",
        CaliforniaProject
    })
}
