const router = require('express').Router()

router.get('/vendorRegistrationForm', (req, res) => {
    res.status(200).render('vendorRegistration.pug')
})

router.get('/clientRegistrationForm', (req, res) => {
    res.status(200).render('clientRegistration.pug')
})

module.exports = router