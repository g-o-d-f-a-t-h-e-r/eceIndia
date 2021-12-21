const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('projects.pug')
})

module.exports = router