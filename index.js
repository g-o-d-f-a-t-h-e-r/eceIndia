const express = require("express")
const path = require("path")
const body_Parser = require("body-parser")
const cors = require('cors')


const homeRoute = require('./routes/home')
const contactUsRoute = require('./routes/contactUs')
const letsTalkRoute = require('./routes/letsTalk')
const careerRoute = require('./routes/career')
const applyRoute = require('./routes/apply')
const achievementsRoute = require('./routes/achievements')
const NewsRoute = require('./routes/news')
const photoGalleryRoute = require('./routes/photo')


const port = process.env.PORT || 80

const app = express()



//Middlewares-------------------------------------------------------------
app.use(cors())
app.use('/public', express.static('public'))
app.use(body_Parser.json())
app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))


//Routes--------------------------------
app.use('/', homeRoute);
app.use('/contactUs', contactUsRoute)
app.use('/letsTalk', letsTalkRoute)
app.use('/career', careerRoute)
app.use('/apply', applyRoute)
app.use('/achievements', achievementsRoute)
app.use('/news', NewsRoute)
app.use('/photoGallery', photoGalleryRoute)




//PUG setup---------------------------------------------------------------
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))



app.listen(port, ()=>{
    console.log("The server is running on the port : ", port);
})
