const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('career.pug')
})

module.exports = router