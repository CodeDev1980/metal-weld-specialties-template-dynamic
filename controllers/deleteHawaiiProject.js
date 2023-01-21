const DeleteHawaiiProject = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    await DeleteHawaiiProject.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
}