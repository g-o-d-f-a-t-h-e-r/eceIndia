const router = require('express').Router()




// PV MODULE------------------------------------------------------------------------

// --------------------------------------------
// PV Modules > Small Module
router.get('/smallModule', (req, res) => {
    res.status(200).render('smallModule.pug')
})
// --------------------------------------------


// --------------------------------------------
// PV Modules > Poly Module
router.get('/polyModule', (req, res)=> {
    res.status(200).render('polyModule.pug')
})
// ---------------------------------------------


// --------------------------------------------
// PV Modules > Mono Module
router.get('/monoModule', (req, res) => {
    res.status(200).render('monoModule.pug')
})
// --------------------------------------------


// -------------------------------------------
// PV Modules > Bifacial > Framed
router.get('/bifacial', (req, res) => {
    res.status(200).render('bifacial.pug')
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
router.get('/dcr', (req, res) => {
    res.status(200).render('dcr.pug')
})

// ------------------------------------------

// ----------------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------------
//  Solar Products---------------------------------

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



//  Solar Pumping System
router.get('/solarPumpingSystem', (req, res) => {
    res.status(200).render('solarPumpingSystem.pug')
})
















module.exports = router