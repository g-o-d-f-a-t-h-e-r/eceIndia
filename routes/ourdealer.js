const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('ourdealer.pug')
})

module.exports = router