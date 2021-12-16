const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('news.pug')
})

module.exports = router