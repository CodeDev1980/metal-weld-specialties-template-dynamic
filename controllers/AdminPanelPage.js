const ArizonaCMS = require('../models/ArizonaProjects');
const NevadaCMS = require('../models/NevadaProjects');
const CaliforniaCMS = require('../models/CaliforniaProjects');
const HawaiiCMS = require('../models/HawaiiProjects');
const AdminStaff = require('../models/Users');

module.exports = async (req, res) => {
    const manageArizona = await ArizonaCMS.find({}).limit(4).sort({_id: -1}).populate('userid');
    const manageNevada = await NevadaCMS.find({}).limit(4).sort({_id: -1}).populate('userid');
    const manageCalifornia = await CaliforniaCMS.find({}).limit(3).sort({_id: -1}).populate('userid');
    const manageHawaii = await HawaiiCMS.find({}).limit(4).sort({_id: -1}).populate('userid');
    const adminUsers = await AdminStaff.find({}).limit(4).sort({_id: -1});
    res.render('admin', {
        title: "Manage Your WorkFlow",
        manageArizona, manageNevada, manageCalifornia, manageHawaii, adminUsers
    })
}