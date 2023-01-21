const OurArizonaProject = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const ArizonaProject = await OurArizonaProject.findById(req.params.id).populate('userid');
    res.render('projectA', {
        title: "Project Information",
        ArizonaProject
    })
}
