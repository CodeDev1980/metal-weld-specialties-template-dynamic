const NevadaPost = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    const nevadaProjects = await NevadaPost.find({}).limit(30).sort({_id: -1});
    res.render('nevada', {
        title: "Our Projects In Nevada",
        nevadaProjects
    })
}