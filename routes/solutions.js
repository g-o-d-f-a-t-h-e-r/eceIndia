const router = require('express').Router()



// Below 20 KW ------------------------------------------------------------------------------------------------------

// Commercial Below 20KW--------
router.get('/commercialBelow20Kw', (req, res) => {
    res.status(200).render('commercialBelow20Kw.pug')
})
// Residential Below 20KW--------
router.get('/residentialBelow20Kw', (req, res) => {
    res.status(200).render('residentialBelow20Kw.pug')
})

// ------------------------------------------------------------------------------------------------------------------



// Above 20 KW-------------------------------------------------------------------------------------------------------
router.get('/commercialAbove20Kw', (req, res) => {
    res.status(200).render('commercialAbove20Kw.pug')
})
// Residential Below 20KW--------
router.get('/industrialAbove20Kw', (req, res) => {
    res.status(200).render('industrialAbove20Kw.pug')
})
// -------------------------------------------------------------------------------------------------------------------


module.exports = router