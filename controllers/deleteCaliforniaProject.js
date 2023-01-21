const DeleteCaliforniaProject = require('../models/CaliforniaProjects');

module.exports = async (req, res) => {
    await DeleteCaliforniaProject.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
}