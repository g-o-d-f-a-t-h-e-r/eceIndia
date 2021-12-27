const router = require('express').Router()
const nodemailer = require('nodemailer')
const upload = require('express-fileupload')



router.use(upload())



router.post('/', async(req, res) => {
    let {companyName, companyAddress, area, cityAndState, pincode, phoneNumber, emailAdd, gstNumber, cstNumber, panNumber, serviceTaxNumber, exciseRegNumber, bankAcNumber1, bankAcName1, bankName1, ifscCode1, branch1, bankAcNumber2, bankAcName2, bankName2, ifscCode2, branch2, name, designation, mobileNumber, itemsManufactured } = req.body


    if(!bankAcNumber2) bankAcNumber2 = '-'
    if(!bankAcName2) bankAcName2 = '-'
    if(!bankName2) bankName2 = '-'
    if(!ifscCode2) ifscCode2 = '-'
    if(!branch2) branch2 = '-'


    let gstCertificate
    let panCardPdf

    if(req.files){
        if(req.files.gstCertificate) gstCertificate = req.files.gstCertificate
        if(req.files.panCardPdf) panCardPdf = req.files.panCardPdf
    }

    const htmlTemplate = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf HTML</title>
    
        <style>
    
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
    
    
            :root{
                --theme : rgb(0, 67, 155);
                --old-color : rgb(0, 117, 196);
                --background : #0a122e;
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
                margin: 40px;
                padding: 10px;
                border-radius: 10px;
                border: 1px solid var(--whiteBgHead)
            }
    
            .form h2{
                color: #162661;
                font-size: 40px;
                text-align: center;
            }
    
            .form h1{
                margin: 20px;
                color: var(--theme);
                font-size: 25px;
                font-weight: 700;
                display: block;
                text-align: center;
            }
    
            .form h3{
                color: var(--theme);
                font-size: 20px;
            }
    
            .form hr{
                margin-bottom: 10px;
            }
    
            .sec{
                margin: 50px 0;
            }
    
            .form span{
                font-weight: 600;
            }
    
            .para{
                background-color: var(--greyBackground);
                padding: 30px;
                width: 100%;
                margin: auto;
                border-radius: 10px;
            }
    
            .form p{
                margin: 20px 0;
            }
    
            .form span{
                display: inline-block;
                width: 200px;
            }
    
            .form text{
                margin-left: 30px;
            }


            .accounts{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
    
            .accounts p{
                min-width: 200px;
                margin : 20px;
            }

    
        </style>
    
    
    </head>
    <body>        
        <div class="form">
            <h2>ECE India Energies Pvt. Ltd.</h2>
            <h1>Vendor Registration Form</h1>
    
            <div class="companyDetails sec">
                <h3>Company Details</h3>
                <hr>
                <div class="para"> 
                    <p><span>Company Name : </span><text>${companyName}</text></p>
                    <p><span>Company Address : </span><text>${companyAddress}</text></p>
                    <p><span>Area : </span><text>${area}</text></p>
                    <p><span>City & State : </span><text>${cityAndState}</text></p>
                    <p><span>Pincode : </span><text>${pincode}</text></p>
                    <p><span>Contact Number : </span><text>${phoneNumber}</text></p>
                    <p><span>Email Id : </span><text>${emailAdd}</text></p>
                    <p><span>GST No. : </span><text>${gstNumber}</text></p>
                    <p><span>CST No. : </span><text>${cstNumber}</text></p>
                    <p><span>PAN No. : </span><text>${panNumber}</text></p>
                    <p><span>Service Tax no. : </span><text>${serviceTaxNumber}</text></p>
                    <p><span>Excise Reg. No. : </span><text>${exciseRegNumber}</text></p>
                </div>
    
            </div>
    
    
            <div class="bankDetails sec">
                <h3>Bank Details</h3>
                <hr>
    
                <div class="accounts para">
                    <div class="titles acc-sec">
                        <p><span>Bank Accounts : </span></p>
                        <hr>
                        <p><span>Bank A/C No. : </span></p>
                        <p><span>Bank A/C Name : </span></p>
                        <p><span>Bank Name : </span></p>
                        <p><span>IFSC Code : </span></p>
                        <p><span>Branch : </span></p>
                    </div>
    
                    <div class="acc1 acc-sec">
                        <p><span>Account 1</span></p>
                        <hr>
                        <p>${bankAcNumber1}</p>
                        <p>${bankAcName1}</p>
                        <p>${bankName1}</p>
                        <p>${ifscCode1}</p>
                        <p>${branch1}</p>
                    </div>
    
                    <div class="acc2 acc-sec">
                        <p><span>Account 2</span></p>
                        <hr>
                        <p>${bankAcNumber2}</p>
                        <p>${bankAcName2}</p>
                        <p>${bankName2}</p>
                        <p>${ifscCode2}</p>
                        <p>${branch2}</p>
                    </div>
                </div>
            </div>
            

    
            <div class="contactPerson sec">
                <h3>Contact Person</h3>
                <hr>
                <div class="para">
                    <p><span>Name : </span><text>${name}</text></p>
                    <p><span>Designation : </span><text>${designation}</text></p>
                    <p><span>Mobile Number : </span><text>${mobileNumber}</text></p>
                </div>
            </div>
    
    
            <div class="manufacturedItems sec">
                <h3>List of Items Manufactured</h3>
                <hr>
                <div class="para">
                    <p><span>List of Items Manufactured : </span><text>${itemsManufactured}</text></p>
                </div>   
            </div>
            
            <p style="font-weight: bold; font-size: 15px;"> Below is the attached GST Certificate and PAN card.</p>
    
        </div>
        
    </body>
    </html>

    `

    // let clientHTML = `

    //         <div class="para">
    //             <p>Thank you ! for Vendor Registration</p>
    //             <p>We got your request and our executive team will contact you shortly regarding your registration...</p>
    //             <p>Till then you can visit our Web page for more information. <a href="https://eceindia.com" target="_blank">Click Here !</a> </p>
    //             <p style="font-weight:bold;">Below is the pdf of your application...</p>
    //         </div>

    //     `

    // let companyHTML = `

    //     <div class="para">
    //         <p>A new vendor Registration request of <span style = "font-weight:bold;">${companyName}</span></p>
    //         <p style="font-weight:bold;">Below is the attached pdf of vendor registration form...</p>
    //     </div>

    // `


        let transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port:587,
            secure:false,
            auth: {
            user: 'eceindia2021@gmail.com', // generated ethereal user
            pass: 'eceIndia@1234', // generated ethereal password
            },
        });

        
        let attachments = [
            {
                filename : gstCertificate.name,
                content : gstCertificate.data
            },
            {
                filename : panCardPdf.name,
                content : panCardPdf.data
            }
        ]



        //  Mail to client
        let mailToClient = {
            from : `'ECE INDIA' <eceindia2021@gmail.com>`,
            to : `${emailAdd}`,
            subject : `Thank You for Vendor Registration : ${companyName} !`,
            html :`<h2 style="color : #162661;">Thank You! ${companyName}</h2><h2>We will contact you soon regarding your vendor registration request...</h2><h3>Below is the registration form for your reference...</h3>` + htmlTemplate,
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
            to : `dangechetan09@gmail.com`,
            subject : `VENDOR REGISTRATION FORM : ${companyName}`,
            html : `<h2 style="color : #162661;">VENDOR - ${companyName} wants to register with us.</h2><h3>Below is the Vendor's registration form...</h3>` + htmlTemplate,
            attachments : attachments
        }

        transporter.sendMail(mailToCompany, (err, info) => {
            if(err){
                console.log('Error sending Email to the Company ! ', err)
                res.status(200).render('vendorRegistration.pug', {
                    bool : 0
                })
            }else{
                console.log('Email Sent to the company: ' + info.response)
                res.status(200).render('vendorRegistration.pug', {
                    bool : 1
                })
            }
        })




    
})



module.exports = router