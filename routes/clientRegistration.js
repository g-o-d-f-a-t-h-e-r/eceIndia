const router = require('express').Router()
const nodemailer = require('nodemailer')
const upload = require('express-fileupload')



router.use(upload())

router.post('/', (req, res) => {
    let {companyName, companyAddress, area, district, cityAndState, pincode, firmType, gstNumber, panNumber, companyWebsite, isMsme, status, productsDealsIn, directorName, directorDesignation, directorEmailAdd, directorMobile1, directorMobile2, contactName, contactDesignation, contactEmailAdd, contactMobile1, contactMobile2, bankAcNumber, bankAcName, bankName, ifscCode, branch, relationshipManager } = req.body

    if(!district) district = '-'
    if(!companyWebsite) companyWebsite = '-'
    if(!directorMobile2) directorMobile2 = '-'
    if(!contactMobile2) contactMobile2 = '-'

    let gstCertificate
    let panCardPdf
    let msmeCertificate

    if(req.files){
        if(req.files.gstCertificate) gstCertificate = req.files.gstCertificate
        if(req.files.panCardPdf) panCardPdf = req.files.panCardPdf
        if(req.files.msmeCertificate) msmeCertificate = req.files.msmeCertificate
    }


    const htmlTemplate = `
    
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Client Registration</title>
        
        
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
                
                
                :root{
                    --theme : rgb(0, 67, 155);
                    --old-color : rgb(0, 117, 196);
                    --background : #0a122e;;
                    --greyBackground : rgb(236, 234, 234);
                    --whiteBgHead : #162661;
                    --whiteBgText : rgb(79, 99, 114);
                    --blueBgText : rgb(221, 221, 221);
                    --extraDarkBackground : #030816;
        
                }
        
        
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Poppins", sans-serif;
                    scroll-behavior: smooth;
                    outline: none;
        
                }
        
                body{
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
        
        
                .form{
                    margin: 0;
                    padding: 10px;
                    border: 1px solid black;
                    border-radius: 5px;
                }
        
                .form h3{
                    color: #0a122e;;
                }
        
                .form h2{
                    font-size: 40px;
                    color: #162661;
                    text-align: center;
                }
        
                .form h1{
                    font-size: 25px;
                    color: #0a122e;;
                    text-align: center;
                    margin: 20px;
                }
        
                .sec{
                    margin: 40px 0;
                }
        
                .sec h3{
                    font-size: 20px;
                    color: rgb(0, 67, 155);
                    margin-left: 5px;
                }
                
                .para{
                    padding: 10px 20px;
                    font-size: 15px;
                }

                
                .para p{
                    margin: 10px 0;
                }
                
                .para span{
                    font-weight: 600;
                    width: 200px;
                    display: inline-block;
                }
        
            
        
            </style>
        
        
        
        </head>
        <body>
            
            <div class="form">
                <h2>ECE India Energies Pvt. Ltd.</h2>
                <h1>Client Registration Form</h1>
        
                <div class="companyDetails sec">
                    <h3>Company Details</h3>
                    <hr>
                    <div class="para"> 
                        <p><span>Company Name : </span><text>${companyName}</text></p>
                        <p><span>Company Address : </span><text>${companyAddress}</text></p>
                        <p><span>Area : </span><text>${area}</text></p>
                        <p><span>District : </span><text>${district}</text></p>
                        <p><span>City & State : </span><text>${cityAndState}</text></p>
                        <p><span>Pincode : </span><text>${pincode}</text></p>
                        <p><span>Type of Firm : </span><text>${firmType}</text></p>
                        <p><span>GST Number : </span><text>${gstNumber}</text></p>
                        <p><span>PAN Number : </span><text>${panNumber}</text></p>
                        <p><span>Company Website : </span><text>${companyWebsite}</text></p>
                        <p><span>IS MSME : </span><text>${isMsme}</text></p>
                        <p><span>Status of Company : </span><text>${status}</text></p>
                        <p><span>Products Deals in  : </span><text>${productsDealsIn}</text></p> 
                    </div>
                </div>
        
        
                <div class="directorsDetails sec">
                    <h3>Prop/Director's Details</h3>
                    <hr>
                    <div class="para"> 
                        <p><span>Prop/Director's Name : </span><text>${directorName}</text></p>
                        <p><span>Designation : </span><text>${directorDesignation}</text></p>
                        <p><span>Email Address : </span><text>${directorEmailAdd}</text></p>
                        <p><span>Mobile Number 1 : </span><text>${directorMobile1}</text></p>
                        <p><span>Mobile Number 2 : </span><text>${directorMobile2}</text></p>
                    </div>
                </div>
        
                <div class="clientsDetails sec">
                    <h3>Contact Person's Details</h3>
                    <hr>
                    <div class="para"> 
                        <p><span>Contact person's Name : </span><text>${contactName}</text></p>
                        <p><span>Designation : </span><text>${contactDesignation}</text></p>
                        <p><span>Email Address : </span><text>${contactEmailAdd}</text></p>
                        <p><span>Mobile Number 1 : </span><text>${contactMobile1}</text></p>
                        <p><span>Mobile Number 2 : </span><text>${contactMobile2}</text></p>
                    </div>
                </div>
        
        
                <div class="bankDetails sec">
                    <h3>Bank Details</h3>
                    <hr>
                    <div class="para"> 
                        <p><span>Bank A/C No  : </span><text>${bankAcNumber}</text></p>
                        <p><span>Bank A/C Name : </span><text>${bankAcName}</text></p>
                        <p><span>Bank Name : </span><text>${bankName}</text></p>
                        <p><span>IFSC Code : </span><text>${ifscCode}</text></p>
                        <p><span>Branch : </span><text>${branch}</text></p>
                        <p><span>Relationship Manager : </span><text>${relationshipManager}</text></p>
                    </div>
                </div>
        
        
                <h3>Below are the pdfs of the attached documents... </h3>
        
        
        
        
        </body>
        </html>
    
    `
    
    const clientHtml = `
    
        <div class="para">
            <h4>Thank you ! for Client Registration : ${companyName}</h4>
            <p>We got your request and our executive team will contact you shortly regarding your registration...</p>
            <p>Till then you can visit our Web page for more information. <a href="https://eceindia.com" target="_blank">Click Here !</a> </p>
            <p style="font-weight:bold;">Below is the registration form...</p>
        </div>
    
    `

    const companyHtml = `
    
        <div class="para">
            <p>A new Client wants to register with us :  <span style = "font-weight:bold;">${companyName}</span></p>
            <p style="font-weight:bold;">Below is the attached Client registration form...</p>
        </div>
    
    `


    let transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port:587,
        secure:false,
        auth: {
        user: 'eceindia2021@gmail.com', // generated ethereal user
        pass: 'eceIndia@1234', // generated ethereal password
        },
    });


    let attachments

    if(msmeCertificate){
        attachments = [
            {
                filename : gstCertificate.name,
                content : gstCertificate.data
            },
            {
                filename : panCardPdf.name,
                content : panCardPdf.data
            },
            {
                filename : msmeCertificate.name,
                content : msmeCertificate.data  
            }
        ]

    }else{
        attachments = [
            {
                filename : gstCertificate.name,
                content : gstCertificate.data
            },
            {
                filename : panCardPdf.name,
                content : panCardPdf.data
            }
        ]
    }

    //  Mail to client
    let mailToClient = {
        from : `'ECE INDIA' <eceindia2021@gmail.com>`,
        to : `${directorEmailAdd}, ${contactEmailAdd}`,
        subject : `Thank You for Client Registration : ${companyName} !`,
        html : clientHtml + htmlTemplate,
        attachments : attachments
       
    }

    transporter.sendMail(mailToClient, (err, info) => {
        if(err){
            console.log('Error sending Email to the client ! ', err)
        }else{
            console.log('Email Sent to client: ' + info.response)
        }
    })


    // Mail to company -----------------------------------------
    let mailToCompany = {
        from : `'ECE INDIA' <eceindia2021@gmail.com>`,
        to : `swapnil.c@eceindia.com`,
        subject : `CLIENT REGISTRATION FORM : ${companyName}`,
        html : companyHtml + htmlTemplate,
        attachments : attachments
    }

    transporter.sendMail(mailToCompany, (err, info) => {
        if(err){
            console.log('Error sending Email to the Company ! ', err)
            res.status(200).render('clientRegistration.pug', {
                bool : 0
            })
        }else{
            console.log('Email Sent to the company: ' + info.response)
            res.status(200).render('clientRegistration.pug', {
                bool : 1
            })
        }
    })



})


module.exports = router