const { append } = require('express/lib/response')

const router = require('express').Router()


router.get('/', (req, res) => {
    res.status(200).render('blogs.pug')
})


module.exports = router