const NevadaProjectPost = require('../models/NevadaProjects');
const path2 = require('path')

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path2.resolve(__dirname, '..', 'public/uploads', image.name), async (error) => {
        await NevadaProjectPost.create({
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
        res.redirect('/admin')
    })
}