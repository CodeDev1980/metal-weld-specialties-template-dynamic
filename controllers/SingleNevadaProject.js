const OurNevadaProject = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    const NevadaProject = await OurNevadaProject.findById(req.params.id);
    res.render('projectB', {
        title: "Project Information",
        NevadaProject
    })
}
