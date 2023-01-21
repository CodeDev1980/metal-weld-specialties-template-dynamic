const DeleteNevadaProject = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    await DeleteNevadaProject.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
}