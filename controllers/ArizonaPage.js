const ArizonaPost = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const arizonaPost = await ArizonaPost.find({}).limit(30).sort({_id: -1});
    res.render('arizona', {
        title: "Our Projects In Arizona",
        arizonaPost
    })
}