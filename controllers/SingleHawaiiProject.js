const OurHawaiiProject = require("../models/HawaiiProjects");

module.exports = async (req, res) => {
    const HawaiiProject = await OurHawaiiProject.findById(req.params.id);
    res.render('projectH', {
        title: "Project Information",
        HawaiiProject
    })
}
