const router = require('express').Router()
const nodemailer = require('nodemailer')
const upload = require('express-fileupload')


router.use(upload())






module.exports = router
