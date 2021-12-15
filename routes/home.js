const router = require('express').Router()


router.get('/', (req, res) => {
    res.status(200).render('home.pug');
})


module.exports = router;