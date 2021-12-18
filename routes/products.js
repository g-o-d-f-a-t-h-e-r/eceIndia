const router = require('express').Router()



// PV Modules > Poly Crystaline > 66 Cell Poly
router.get('/66CellPoly', (req, res)=> {
    res.status(200).render('66CellPoly.pug')
})



module.exports = router