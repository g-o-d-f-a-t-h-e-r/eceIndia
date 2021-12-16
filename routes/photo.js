const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('photoGallery.pug')
})

router.get('/1', (req, res) => {
    res.status(200).render('photo1.pug')
})
router.get('/2', (req, res) => {
    res.status(200).render('photo2.pug')
})
router.get('/3', (req, res) => {
    res.status(200).render('photo3.pug')
})
module.exports = router