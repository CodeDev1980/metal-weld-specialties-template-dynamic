const OurNevadaProject = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const NevadaProject = await OurNevadaProject.findById(req.params.id).populate('userid');
    res.render('projectB', {
        title: "Project Information",
        NevadaProject
    })
}
