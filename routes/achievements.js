const router = require('express').Router()


router.get('/certifications', (req, res) =>{
    res.status(200).render('certifications.pug')
})

router.get('/awards', (req, res) =>{
    res.status(200).render('awards.pug')
})

router.get('/patents', (req, res) =>{
    res.status(200).render('patents.pug')
})


module.exports = router