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
const aboutUsRoute = require('./routes/aboutUs')
const projectsRoute = require('./routes/projects')
const downloadsRoute = require('./routes/downloads')
const vendorRegistrationRoute = require('./routes/vendorRegistration')
const clientRegistrationRoute = require('./routes/clientRegistration')
const blogsRoute = require('./routes/blogs')
const NewsRoute = require('./routes/news')
const photoGalleryRoute = require('./routes/photo')
const productsRoute = require('./routes/products')
const solutionsRoute = require('./routes/solutions')
const inquiryRoute = require('./routes/inquiry')
const solarark = require('./routes/solarark')
const ourdealer = require('./routes/ourdealer')

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
app.use('/aboutUs', aboutUsRoute)
app.use('/projects', projectsRoute)
app.use('/downloads', downloadsRoute)
app.use('/vendorRegistration', vendorRegistrationRoute)
app.use('/clientRegistration', clientRegistrationRoute)
app.use('/blogs', blogsRoute)
app.use('/news', NewsRoute)
app.use('/photoGallery', photoGalleryRoute)
app.use('/products', productsRoute)
app.use('/solutions', solutionsRoute)
app.use('/inquiry', inquiryRoute)
app.use('/solarark', solarark)
app.use('/ourdealer', ourdealer)



//PUG setup---------------------------------------------------------------
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))



app.listen(port, ()=>{
    console.log("The server is running on the port : ", port);
})