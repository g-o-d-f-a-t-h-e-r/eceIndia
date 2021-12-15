const router = require('express').Router()


router.get('/companyProfile', (req, res) =>{
    res.status(200).render('companyProfile.pug')
})

router.get('/directorsDesk', (req, res) =>{
    res.status(200).render('directorsDesk.pug')
})


module.exports = router