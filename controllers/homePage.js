const ArizonaPost = require('../models/ArizonaProjects');
const NevadaPost = require('../models/NevadaProjects');
const CaliforniaPost = require('../models/CaliforniaProjects');
const HawaiiPost = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    const arizonaProjects = await ArizonaPost.find({}).limit(3).sort({_id: -1});
    const nevadaProjects = await NevadaPost.find({}).limit(3).sort({_id: -1});
    const californiaProjects = await CaliforniaPost.find({}).limit(3).sort({_id: -1});
    const hawaiiProjects = await HawaiiPost.find({}).limit(3).sort({_id: -1});
    res.render('index', {
        title: "Home Page",
        arizonaProjects, nevadaProjects, californiaProjects, hawaiiProjects
    })
}