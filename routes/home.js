const router = require('express').Router()


router.get('/', (req, res) => {
    res.status(200).render('home.pug');
})

router.get('/ecesDistributor', (req, res) => {
    res.status(200).render('ecesDistributor.pug')
})


module.exports = router;