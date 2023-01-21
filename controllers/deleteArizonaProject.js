const DeleteArizonaProject = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    await DeleteArizonaProject.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
}