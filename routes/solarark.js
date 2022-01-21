const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('solarark.pug')
})

module.exports = router;