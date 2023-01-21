const CaliforniaProjectPost = require('../models/CaliforniaProjects');
const path3 = require('path')

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path3.resolve(__dirname, '..', 'public/uploads', image.name), async (error) => {
        await CaliforniaProjectPost.create({
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
        res.redirect('/admin')
    })
}