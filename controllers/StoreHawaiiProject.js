const HawaiiProjectPost = require('../models/HawaiiProjects');
const path4 = require('path')

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path4.resolve(__dirname, '..', 'public/uploads', image.name), async (error) => {
        await HawaiiProjectPost.create({
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
        res.redirect('/admin')
    })
}