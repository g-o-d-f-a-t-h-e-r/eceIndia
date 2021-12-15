const router = require('express').Router()
const nodemailer = require('nodemailer')
const upload = require('express-fileupload')


router.use(upload())


router.post('/', (req, res) => {
    const {fName, lName, emailAdd, phoneNo, tExp, solarExp, currentRole, preferredRole, pincode, city, state, country, resume} = req.body

    let file;

    if(req.files){
        file = req.files.resume
    }

    let output1 = `
            <h2><span style="font-weight : bold">First Name : </span>${fName} <br> Last Name : </span>${lName}</h2>
            <br>
            <p><span style="font-weight : bold">Email : </span>${emailAdd}</p>
            <p><span style="font-weight : bold">Phone Number : </span>${phoneNo}</p>
            <p><span style="font-weight : bold">Total Experience : </span>${tExp}</p>
            <p><span style="font-weight : bold">Solar Module Manufacturing Experience : </span>${solarExp}</p>
            <p><span style="font-weight : bold">Current Department : </span>${currentRole}</p>
            <p><span style="font-weight : bold">Preferred Department : </span>${preferredRole}</p>
            <p><span style="font-weight : bold">Pincode : </span>${pincode}</p>
            <p><span style="font-weight : bold">City : </span>${city}</p>
            <p><span style="font-weight : bold">State : </span>${state}</p>
            <p><span style="font-weight : bold">Country : </span>${country}</p>
            <br>
            <p><span style="font-weight : bold">Below is the attached resume ...</p>
            <br>
    `





    let output2 = `
    
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ECE India Mail</title>
                <style>
            
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
                    
                    :root {
                    --theme: rgb(0, 67, 155);
                    /* --theme : #152142; */
                    --old-color: rgb(0, 117, 196);
                    --background: #0a122e;
                    --greyBackground: rgb(236, 234, 234);
                    /* --whiteBgText : rgb(104, 104, 104); */
                    --whiteBgHead: #162661;
                    --whiteBgText: rgb(79, 99, 114);
                    --blueBgText: rgb(221, 221, 221);
                    --dropDownBg: rgb(247, 247, 247);
                    --extraDarkBackground: #030816;
                    }
            
                    *{
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        font-family: "Poppins", sans-serif;
                        scroll-behavior: smooth;
                        outline: none;
                    }
            
                    body{
                        overflow-x: hidden;
                        box-sizing: border-box;
                        max-width: 100%;
                    }
            
                    .image{
                        width: 100%;
                        /* background-color: black; */
                        overflow: hidden;
                        margin-top: 20px;
                    }
            
                    .image h1{
                        font-size: 35px;
                        text-align: center;
                        color: var(--whiteBgHead);
                        margin: 0;
                        padding: 0;
            
                    }
            
                    .image img{
                        display: block;
                        width: 100%;
                        margin: 20px 0;
                        padding: 0 65px;
                        overflow: hidden;
                    }
            
                    .content{
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        padding: 50px;
                    }
            
            
                    .content p:nth-child(1){
                        font-weight: 700;
                        font-size: 25px;
                        margin-bottom: 20px;
                        color: var(--whiteBgHead);
                    }
                    .content p{
                        font-size: 16px;
                        line-height: 30px;
                        padding: 5px 20px;
                    }
            
                    .content a{
                        margin-left: 10px;
                        text-decoration: none;
                        color: var(--theme);
                        transition: all 0.3s ease;
                    }
            
                    .content a:hover{
                        color: var(--whiteBgHead);
                    }
            
                    .img img{
                        width: 500px;
                    }
            
                    .regards{
                        padding: 20px 90px;
                        color: var(--whiteBgHead);
                    }
            
                    .regards h2{
                        font-size: 25px;
                    }
            
                    .regards p{
                        font-weight: 700;
                        color: black;
                        font-size: 18px;
                    }
            
            
                    @media screen and (max-width : 1024px) {
            
                        *{
                            width: 100%;
                            overflow-x: hidden;
                            margin: 0;
                            padding: 0;
                        }
            
                        body{
                            margin: 0;
                            padding: 0;
            
                        }
            
                        .content{
                            display: flex;
                            flex-direction: column-reverse;
                            align-items: center;
                            text-align: center;
                        }
            
                        .img{
                            width: 100%;
                        }
            
                        .img img{
                            width: 80%;
                            object-fit: cover
                        }
            
                        .content .para{
                            margin-top: 40px;
                        }
            
                        .regards{
                            text-align: center;
                        }
                        
                    }
            
            
                    @media screen and (max-width : 768px) {
                        .content{
                            display: flex;
                            flex-direction: column-reverse;
                            align-items: center;
                            
                        }
            
                        .content .para{
                            margin: 20px 0;
                            padding: 0;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            padding-left: 20px;
                        }
            
                        .regards{
                            margin :0;
                            margin-bottom: 50px;
                            padding: 0;
                            width: 100%;
                            text-align: center;
                        }
            
            
                    }
            
                    @media screen and (max-width : 414px) {
                        *{
                            width: 414px;
                            overflow-x: hidden;
                        }
                        
                        .image h1{
                            font-size: 25px;
                        }
            
                        .image{
                            width: 100%;
                            
                        }
                        
                        .image img{
                            margin: 20px 0;
                            padding: 0;
                            width: 100%;
                            height: 150px;
                            background-color: black;
                        }
            
                        .content{
                            margin: 10px 0;
                            padding: 0;
                            text-align: center;
                        }
            
                        .content .para{
                            margin: 40px;
                            padding: 0;
                        }
            
                        .regards{
                            margin: 0;
                            margin-bottom: 20px;
                            padding: 0;
                            width: 100%;
                            text-align: center;
                        }
            
            
                    }
            
            
            
                </style>
            </head>
            <body>
                <div class="image">
                    <h1 style = "color : rgb(0, 67, 155);">ECE INDIA ENERGIES PVT LTD</h1>
                </div>
            
                <div class="content">
                    <div class="para">
                        <p>Thank you ! for applying at ECE INDIA PVT LTD.</p>
                        <p>We appreciate the time and effort you put in for considering us and applying for a job.</p>
                        <p>We got your application and our HR team will contact you shortly if your profile matches our requirements.</p>
                        <p>If you don't hear from us in 2 weeks, we probably don't have the vacancy which matches your skillset.</p>
                        <p>We will notify you when we are open to the job role that you are interested in.</p>
                        <p>Thank you again and all the best for your career.</p>
                        <p>Till then you can visit our career page for more information. <a href="https://eceindia.com" target="_blank">Click Here !</a> </p>
                    </div>
            
                    <div class="img">
                        <img style = "width : 700px;" src="https://i.imgur.com/wrMhCCd.png" alt="Image">
                    </div>
                    
                </div>
            
                <div class="regards">
                    <h2>Regards</h2>
                    <p>ECE India Energies Private Ltd.</p>
                </div>
                
            
            
            </body>
            </html>

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




    //  Mail to client
    let mailToClient = {
        from : `'ECE INDIA' <eceindia2021@gmail.com>`,
        to : `${emailAdd}`,
        subject : `Thank You ${fName} !`,
        html : output2
    }

    transporter.sendMail(mailToClient, (err, info) => {
        if(err){
            console.log('Error sending Email to the reciever ! ', err)
        }else{
            console.log('Email Sent to client: ' + info.response)
        }
    })




    // Mail to company -----------------------------------------
    let mailToCompany = {
        from : `'ECE INDIA' <eceindia2021@gmail.com>`,
        to : `dangechetan09@gmail.com`,
        subject : `JOB APPLICATION : ${preferredRole}`,
        html : output1,
        attachments : [
            {   
                filename : file.name,
                content : file.data
            }
        ]
    }

    transporter.sendMail(mailToCompany, (err, info) => {
        if(err){
            console.log('Error sending Email to the Company ! ', err)
            res.status(200).render('career.pug', {
                bool : 0
            })
        }else{
            console.log('Email Sent to the company: ' + info.response)
            res.status(200).render('career.pug', {
                bool : 1
            })
        }
    })





})



module.exports = router