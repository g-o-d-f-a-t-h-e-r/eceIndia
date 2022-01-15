const router = require('express').Router()
const nodemailer = require('nodemailer')


router.post('/', (req, res) => {

    const {name, emailAdd, phoneNumber, reasonForContact, pincode, state, country, yourMessage} = req.body

    let output1 = `
        <h2><span style="font-weight : bold">Name : </span>${name}</h2>
        <h3><span style="font-weight : bold">Email : </span>${emailAdd}</h3>
        <p><span style="font-weight : bold">Phone Number : </span>${phoneNumber}</p>
        <p><span style="font-weight : bold">Reason for Contact : </span>${reasonForContact}</p>
        <p><span style="font-weight : bold">Pincode : </span>${pincode}</p>
        <p><span style="font-weight : bold">State : </span>${state}</p>
        <p><span style="font-weight : bold">Country : </span>${country}</p>
        <br>
        <p><span style="font-weight : bold">Message : </span>${yourMessage}</p>
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
                    --background: #0a122e;;
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
                           background: -webkit-linear-gradient(left,#01ACEF, #01A550);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
                           background: -webkit-linear-gradient(left,#01ACEF, #01A550);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
                    }
                    .content p{
                        font-size: 16px;
                        line-height: 30px;
                        padding: 5px 20px;
                    }
            
                    .content a{
                        margin-left: 10px;
                        text-decoration: none;
                       background: -webkit-linear-gradient(left,#01ACEF, #01A550);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
                        transition: all 0.3s ease;
                    }
            
                    .content a:hover{
                           background: -webkit-linear-gradient(left,#01ACEF, #01A550);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
                    }
            
                    .img img{
                        width: 500px;
                    }
            
                    .regards{
                        padding: 20px 90px;
                           background: -webkit-linear-gradient(left,#01ACEF, #01A550);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
                    <h1 style = "color : rgb(0, 67, 155);" >ECE INDIA ENERGIES PVT LTD</h1>
                </div>
            
                <div class="content">
                    <div class="para">
                        <p>Thank you ! for contacting ECE INDIA PVT LTD</p>
                        <p>We appreciate the time and effort you put in for contacting us. </p>
                        <p>We got your request and our team will contact you shortly regarding your query.</p>
                        <p>Till then you can visit our products page for more information. <a href="https://eceindia.com" target="_blank">Click Here !</a> </p>
                    </div>
            
                    <div class="img">
                        <img style = "width : 700px;" src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Image">
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
        subject : `Thank You ${name} !`,
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
        to : `swapnil.c@eceindia.com`,
        subject : `CUSTOMER QUERY : ${reasonForContact}`,
        html : output1
    }

    transporter.sendMail(mailToCompany, (err, info) => {
        if(err){
            console.log('Error sending Email to the company ! ', err)
            res.status(200).render('home.pug', {
                bool : 0
            })
        }else{
            console.log('Email Sent to company: ' + info.response)
            res.status(200).render('home.pug', {
                bool : 1
            })
        }
    })



})


module.exports = router