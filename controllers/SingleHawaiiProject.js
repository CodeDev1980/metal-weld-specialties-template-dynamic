const OurHawaiiProject = require("../models/ArizonaProjects");

module.exports = async (req, res) => {
    const HawaiiProject = await OurHawaiiProject.findById(req.params.id).populate('userid');
    res.render('projectH', {
        title: "Project Information",
        HawaiiProject
    })
}
