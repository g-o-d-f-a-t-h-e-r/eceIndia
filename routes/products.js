const router = require('express').Router()




// PV MODULE------------------------------------------------------------------------


// --------------------------------------------
// PV Modules > Poly Crystaline > 66 Cell Poly
router.get('/66CellPoly', (req, res)=> {
    res.status(200).render('66CellPoly.pug')
})

// PV Modules > Poly Crystaline > 72 Cell Poly
router.get('/72CellPoly', (req, res)=> {
    res.status(200).render('72CellPoly.pug')
})

// PV Modules > Poly Crystaline > 144 Cell Poly
router.get('/144CellPoly', (req, res)=> {
    res.status(200).render('144CellPoly.pug')
})
// ---------------------------------------------



// --------------------------------------------
// PV Modules > Mono Perc > 60 Cells Mono
router.get('/60CellMono', (req, res) => {
    res.status(200).render('60CellMono.pug')
})
// PV Modules > Mono Perc > 72 Cells Mono
router.get('/72CellMono', (req, res) => {
    res.status(200).render('72CellMono.pug')
})
// PV Modules > Mono Perc > 144 Cells Mono
router.get('/144CellMono', (req, res) => {
    res.status(200).render('144CellMono.pug')
})

// --------------------------------------------


// -------------------------------------------
// PV Modules > Bifacial > Framed
router.get('/framed', (req, res) => {
    res.status(200).render('framed.pug')
})

// PV Modules > Bifacial > UnFramed
router.get('/unframed', (req, res) => {
    res.status(200).render('unframed.pug')
})
// ------------------------------------------


// -------------------------------------------
// PV Modules > BIPV
router.get('/bipv', (req, res) => {
    res.status(200).render('bipv.pug')
})
// ------------------------------------------


// -------------------------------------------
// PV Modules > DCR > 66 Cell DCR
router.get('/66CellDcr', (req, res) => {
    res.status(200).render('66CellDcr.pug')
})

// PV Modules > DCR > 72 Cell DCR
router.get('/72CellDcr', (req, res) => {
    res.status(200).render('72CellDcr.pug')
})
// ------------------------------------------

// -------------------------------------------
// PV Modules > Flexible
router.get('/flexible', (req, res) => {
    res.status(200).render('flexible.pug')
})
// ------------------------------------------


// ----------------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------------
//  Solar Home Lightening---------------------------------

// ------------------------------------------
// Solar Home Lightening > Home Light Systems
router.get('/homeLightSystems', (req, res) => {
    res.status(200).render('homeLightSystems.pug')
})
// ------------------------------------------

// ------------------------------------------
// Solar Home Lightening > Solar Cookers
router.get('/solarCooker', (req, res) => {
    res.status(200).render('solarCooker.pug')
})
// ------------------------------------------

// ------------------------------------------
// Solar Home Lightening > Solar Lantern
router.get('/solarLantern', (req, res) => {
    res.status(200).render('solarLantern.pug')
})
// ------------------------------------------

// ------------------------------------------
// Solar Home Lightening > Solar Insect Killer
router.get('/solarInsectKiller', (req, res) => {
    res.status(200).render('solarInsectKiller.pug')
})
// ------------------------------------------

// --------------------------------------------
// Solar Home Lightening > Solar Insect Killer
router.get('/solarSystem', (req, res) => {
    res.status(200).render('solarSystem.pug')
})
// --------------------------------------------

// --------------------------------------------
// Solar Home Lightening > Traffic Signal > Solar Blinker
router.get('/solarBlinker', (req, res) => {
    res.status(200).render('solarBlinker.pug')
})
// --------------------------------------------

// --------------------------------------------
// Solar Home Lightening > Traffic Signal > Solar Blinker
router.get('/solarStreetLight', (req, res) => {
    res.status(200).render('solarStreetLight.pug')
})
// --------------------------------------------


















module.exports = router