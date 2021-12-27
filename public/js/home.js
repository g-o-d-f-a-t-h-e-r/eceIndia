
// DropDown Menu ----------------------------------------------------------------------------------------------------------------------------------

const  menuBtn = document.querySelector('.hamburger')
const dropDownMenu = document.querySelector('.dropdown-menu')
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open')
        dropDownMenu.classList.add('open')
            const logoImg = document.getElementById('logoImg')
            // const logoText = document.getElementById('logoText')
            const navbar = document.getElementById('navbar')
            const hamburger = document.querySelector('.hamburger-line')

            logoImg.classList.add('dropDown')
            // logoText.classList.add('dropDown')
            navbar.classList.add('dropDown')
            hamburger.classList.add('dropDown')

        menuOpen = true;
    }else{
        menuBtn.classList.remove('open')
        dropDownMenu.classList.remove('open')

        
            const logoImg = document.getElementById('logoImg')
            // const logoText = document.getElementById('logoText')
            const navbar = document.getElementById('navbar')
            const hamburger = document.querySelector('.hamburger-line')

            logoImg.classList.remove('dropDown')
            // logoText.classList.remove('dropDown')
            navbar.classList.remove('dropDown')
            hamburger.classList.remove('dropDown')
     

        menuOpen = false;
    }
})
// -----------------------------------------------------------------------------------------------------------------

// Drop down click event----------------------------------------------------------------------------------------------

    // Home Drop ---------------------------------------------------------------------------
        const homeDrop = document.querySelector('.home-drop p')
        const homeMenu = document.querySelector('.home-menu')

        homeDrop.addEventListener('click', () => {
            homeMenu.classList.toggle('open')
        })
    // ------------------------------------------------------------------------------------

    //About Us Drop--------------------------------------------------------------------------
        const aboutUsDrop = document.querySelector('.aboutUs-drop p')
        const aboutUsMenu = document.querySelector('.aboutUs-menu')
        aboutUsDrop.addEventListener('click', () => {
            aboutUsMenu.classList.toggle('open')
            aboutUsDrop.classList.toggle('open')
        })
    // -------------------------------------------------------------------------------------

    //Products Drop-------------------------------------------------------------------------
        const productsDrop = document.querySelector('.products-drop p')
        const productsMenu = document.querySelector('.products-menu')
        productsDrop.addEventListener('click', () => {
            productsMenu.classList.toggle('open')
            productsDrop.classList.toggle('open')
        })

        // PV Module drop
            const pvModuleDrop = document.querySelector('.pvModule-drop p')
            const pvModuleMenu = document.querySelector('.pvModule-menu')

            pvModuleDrop.addEventListener('click', () => {
                pvModuleMenu.classList.toggle('open')
                // pvModuleDrop.classList.toggle('open')
            })
        

            // // Poly Crystaline
            //     const polyCrystalineDrop = document.querySelector('.polyCrystaline-drop p')
            //     const polyCrystalineMenu = document.querySelector('.polyCrystaline-menu')

            //     polyCrystalineDrop.addEventListener('click', () => {
            //         polyCrystalineMenu.classList.toggle('open')
            //         // pvModuleDrop.classList.toggle('open')
            //     })

            // // Mono Perc
            //     const monoPercDrop = document.querySelector('.monoPerc-drop p')
            //     const monoPercMenu = document.querySelector('.monoPerc-menu')

            //     monoPercDrop.addEventListener('click', () => {
            //         monoPercMenu.classList.toggle('open')
            //         // pvModuleDrop.classList.toggle('open')
            //     })

            // // Bifacial
            //     const bifacialDrop = document.querySelector('.bifacial-drop p')
            //     const bifacialMenu = document.querySelector('.bifacial-menu')

            //     bifacialDrop.addEventListener('click', () => {
            //         bifacialMenu.classList.toggle('open')
            //         // pvModuleDrop.classList.toggle('open')
            //     })

            // // DCR
            //     const dcrDrop = document.querySelector('.dcr-drop p')
            //     const dcrMenu = document.querySelector('.dcr-menu')

            //     dcrDrop.addEventListener('click', () => {
            //         dcrMenu.classList.toggle('open')
            //         // pvModuleDrop.classList.toggle('open')
            //     })
        
        // Solar Home Lightening System 
            const solarHomeLighteningDrop = document.querySelector('.solarHomeLightening-drop p')
            const solarHomeLighteningMenu = document.querySelector('.solarHomeLightening-menu')

            solarHomeLighteningDrop.addEventListener('click', () => {
                solarHomeLighteningMenu.classList.toggle('open')
            })

            //Traffic Signal Drop 
                const trafficSignalDrop = document.querySelector('.trafficSignal-drop p')
                const trafficSignalMenu = document.querySelector('.trafficSignal-menu')

                trafficSignalDrop.addEventListener('click', () => {
                    trafficSignalMenu.classList.toggle('open')
                })

    // ------------------------------------------------------------------------------------------------
    

    // Solutions Drop ---------------------------------------------------------------------------------

        const solutionsDrop = document.querySelector('.solutions-drop p')
        const solutionsMenu = document.querySelector('.solutions-menu')

        solutionsDrop.addEventListener('click', () => {
            solutionsMenu.classList.toggle('open')
        })


        // Products Below 20 KW
            const productsBelow20KwDrop = document.querySelector('.productsBelow20Kw-drop p')
            const productsBelow20KwMenu = document.querySelector('.productsBelow20Kw-menu')

            productsBelow20KwDrop.addEventListener('click', () => {
                productsBelow20KwMenu.classList.toggle('open')
            })
        // --------------------

        // Products Above 20 KW
            const productsAbove20KwDrop = document.querySelector('.productsAbove20Kw-drop p')
            const productsAbove20KwMenu = document.querySelector('.productsAbove20Kw-menu')

            productsAbove20KwDrop.addEventListener('click', () => {
                productsAbove20KwMenu.classList.toggle('open')
            })
        // --------------------

        // Operation and Maintainance
            const operationAndMaintainanceDrop = document.querySelector('.operationAndMaintainance-drop p')
            const operationAndMaintainanceMenu = document.querySelector('.operationAndMaintainance-menu')

            operationAndMaintainanceDrop.addEventListener('click', () => {
                operationAndMaintainanceMenu.classList.toggle('open')
            })


            // // AMC--------
            //     const amcDrop = document.querySelector('.amc-drop p')
            //     const amcMenu = document.querySelector('.amc-menu')

            //     amcDrop.addEventListener('click', () => {
            //         amcMenu.classList.toggle('open')
            //     })
            // -----------
        // --------------------

    
    // ------------------------------------------------------------------------------------------------

    // Downloads Drop --------------------------------------------------------------------------------

        const downloadsDrop = document.querySelector('.downloads-drop p')
        const downloadsMenu = document.querySelector('.downloads-menu')

        downloadsDrop.addEventListener('click', () => {
            downloadsMenu.classList.toggle('open')
        })

    // ----------------------------------------------------------------------------------------------


    // Achievements Drop --------------------------------------------------------------------------------

    const achievementsDrop = document.querySelector('.achievements-drop p')
    const achievementsMenu = document.querySelector('.achievements-menu')

    achievementsDrop.addEventListener('click', () => {
        achievementsMenu.classList.toggle('open')
    })

// ----------------------------------------------------------------------------------------------






// ----------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------

// Restrict for Landscape-------------------------------------------

window.addEventListener('orientationchange', (e) => {
    if(e.target.screen.orientation.angle && window.screen.height <= 540){
        alert('Please switch to portrait mode...')
    }
})

// --------------------------------------------------------

window.addEventListener('scroll', function(){
    let header = document.querySelector('.nav')
    
    let windowPosition = window.scrollY > 0
    header.classList.toggle('scrolling-active', windowPosition)
    if(windowPosition && window.screen.width > 1024){
        header.style.height = "70px"
        header.style.width = "100%"
    }else if(windowPosition && window.screen.width <= 414){
        header.style.height = "70px"
        header.style.width = "100%"
    }
    else if(windowPosition){
        header.style.height = "100px"
        header.style.width = "100%"
    }
    else{
        header.style.height = "120px"
        header.style.width = "100%"
    }


})

// document.addEventListener('contextmenu', event => event.preventDefault());

const scrolltop = () => {
    window.scrollTo(0, 0)
}


const onload = () => {
    let head = document.querySelector(".head")
    let subHead = document.querySelector(".subHead")
    let desc = document.querySelector(".text p")
    let btn = document.querySelector("#btn")
    const preloader = document.getElementById('loading')
    let header = document.querySelector('.nav')

    window.scrollTo(0, 0)
    header.style.width = "100%"
    head.classList.add("fade")
    subHead.classList.add("fade1")
    desc.classList.add("fade2")
    btn.classList.add('fade3')
    preloader.style.display = "none"

    // Restrict Landscape mode

    if (window.matchMedia("(orientation: landscape)").matches && window.screen.height <= 540) {
        // you're in LANDSCAPE mode
        alert("Please switch to portrait mode...")
     }

    // For mobiles setup ----------------------------------------------


    if(window.screen.width <= 414){
        const chairmanImg = document.querySelector('.chairmanImg')
        const sec1 = document.querySelector('.sec1')
        const sec2 = document.querySelector('.sec2')
        const rooftopImg = document.querySelector('.rooftopImg')

        chairmanImg.style.transform = "translate-y(50px)"
        sec1.style.transform = "translate-y(50px)"
        sec2.style.transform = "translate-y(50px)"
        rooftopImg.style.transform = "translate-y(50px)"


        chairmanImg.style.transform = "translateX(0)"
        sec1.style.transform = "translateX(0)"
        sec2.style.transform = "translateX(0)"
        rooftopImg.style.transform = "translateX(0)"

    }

    // ---------------------------------------------------------------

    
}

const scrollto = () => {
    window.scrollTo(0, 625)
}

document.addEventListener('scroll', () => {

    // card Image------------------------------------------------
    if(window.scrollY > 280 && window.screen.width > 414){
        let imgs = document.querySelectorAll('.img img');

        imgs.forEach(img => {
            img.classList.add('cardImg')
        }) 
    }
    if(window.scrollY > 280 && window.screen.width <= 414){
        let imgs = document.querySelectorAll('.img img');
        imgs[0].classList.add('cardImg')
    }
    if(window.scrollY > 450 && window.screen.width <= 414){
        let imgs = document.querySelectorAll('.img img');
        imgs[1].classList.add('cardImg')
    }
    if(window.scrollY > 650 && window.screen.width <= 414){
        let imgs = document.querySelectorAll('.img img');
        imgs[2].classList.add('cardImg')
    }
    if(window.scrollY > 950 && window.screen.width <= 414){
        let imgs = document.querySelectorAll('.img img');
        imgs[3].classList.add('cardImg')
    }
    if(window.scrollY > 1200 && window.screen.width <= 414){
        let imgs = document.querySelectorAll('.img img');
        imgs[4].classList.add('cardImg')
    }
    if(window.scrollY > 1450 && window.screen.width <= 414){
        let imgs = document.querySelectorAll('.img img');
        imgs[5].classList.add('cardImg')
    }
    // -----------------------------------------------------------


    // Card Information ------------------------------------------
    if(window.scrollY > 350 && window.screen.width > 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s.forEach(h3 => {
            h3.classList.add('cardText')
        })
        infos.forEach(info => {
            info.classList.add('cardText')
        })
    }

    if(window.scrollY > 350 && window.screen.width <= 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s[0].classList.add('cardText')
        infos[0].classList.add('cardText')
    }
    if(window.scrollY > 520 && window.screen.width <= 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s[1].classList.add('cardText')
        infos[1].classList.add('cardText')
    }
    if(window.scrollY > 720 && window.screen.width <= 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s[2].classList.add('cardText')
        infos[2].classList.add('cardText')
    }
    if(window.scrollY > 1000 && window.screen.width <= 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s[3].classList.add('cardText')
        infos[3].classList.add('cardText')
    }
    if(window.scrollY > 1300 && window.screen.width <= 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s[4].classList.add('cardText')
        infos[4].classList.add('cardText')
    }
    if(window.scrollY > 1550 && window.screen.width <= 414){
        let h3s = document.querySelectorAll('.img h3')
        let infos = document.querySelectorAll('.info')

        h3s[5].classList.add('cardText')
        infos[5].classList.add('cardText')
    }
    // ---------------------------------------------------------------


    // -Chairman ------------------------------------------------------------
    if(window.scrollY > 750 && window.screen.width > 414){
        const chairmanImg = document.querySelector('.chairmanImg')
        const sec1 = document.querySelector('.sec1')
        const sec2 = document.querySelector('.sec2')
        chairmanImg.classList.add('animateX')
        sec1.classList.add('animate')
        sec2.classList.add('animate')
    }

    if(window.scrollY > 1800 && window.screen.width <= 414){
        const chairmanImg = document.querySelector('.chairmanImg')

        chairmanImg.classList.add('animate')
    
    }

    if(window.scrollY > 2000 && window.screen.width <= 414){
        const sec1 = document.querySelector('.sec1')

        sec1.classList.add('animate')
    }
    if(window.scrollY > 2250 && window.screen.width <= 414){
        const sec2 = document.querySelector('.sec2')

        sec2.classList.add('animate')
    }

    // ----------------------------------------------------------------------


    // BIS ---------------------------------------------------------------------
    if(window.scrollY > 1350 && window.screen.width > 414){
        const qualityDescH2 = document.querySelector('.qualityDesc h2')
        const qualityDescP = document.querySelector('.qualityDesc p')
        const qualityImg = document.querySelector('.qualityImg img')
        const qualityImgP = document.querySelector('.qualityImg p')

        qualityDescH2.classList.add('animate')
        qualityDescP.classList.add('animate')
        qualityImg.classList.add('animate')
        qualityImgP.classList.add('animate')
    }

    if(window.scrollY > 3000 && window.screen.width <= 414){
        const qualityImg = document.querySelector('.qualityImg img')
        const qualityImgP = document.querySelector('.qualityImg p')

        qualityImg.classList.add('animate')
        qualityImgP.classList.add('animate')
    }

    if(window.scrollY > 3200 && window.screen.width <= 414){
        const qualityDescH2 = document.querySelector('.qualityDesc h2')
        const qualityDescP = document.querySelector('.qualityDesc p')

        qualityDescH2.classList.add('animate')
        qualityDescP.classList.add('animate')
    }

    // ---------------------------------------------------------------------------


    // Rooftop ------------------------------------------------------------------
    if(window.scrollY > 1750 && window.screen.width > 414){

        const rooftopImg = document.querySelector('.rooftopImg')
        const rooftopDescH2 = document.querySelector('.rooftopDesc h2')
        const rooftopDescP = document.querySelector('.rooftopDesc p')
        const rooftopDescA = document.querySelector('.rooftopDesc a')

        rooftopImg.classList.add('animateX')
        rooftopDescH2.classList.add('animate')
        rooftopDescP.classList.add('animate')
        rooftopDescA.classList.add('animate')

    }

    if(window.scrollY > 3800 && window.screen.width <= 414){
        const rooftopImg = document.querySelector('.rooftopImg')
        rooftopImg.classList.add('animate')
    }

    if(window.scrollY > 4000 && window.screen.width <= 414){
        const rooftopDescH2 = document.querySelector('.rooftopDesc h2')
        const rooftopDescP = document.querySelector('.rooftopDesc p')
        const rooftopDescA = document.querySelector('.rooftopDesc a')

        rooftopDescH2.classList.add('animate')
        rooftopDescP.classList.add('animate')
        rooftopDescA.classList.add('animate')
    }

    // ---------------------------------------------------------------------


    // Why We --------------------------------------------------------------
    if(window.scrollY > 2500 && window.screen.width > 414){
        const whyWeDescH2 = document.querySelector('.whyWeDesc h2')
        const whyWeDescP = document.querySelector('.whyWeDesc ul')
        const whyWeImg = document.querySelector('.whyWeImg')

        whyWeDescH2.classList.add('animate')
        whyWeDescP.classList.add('animate')
        whyWeImg.classList.add('animateX')
    }

    if(window.scrollY > 4400 && window.screen.width <= 414){
        const whyWeImg = document.querySelector('.whyWeImg')
        whyWeImg.classList.add('animateX')
    }

    if(window.scrollY > 4600 && window.screen.width <= 414){
        const whyWeDescH2 = document.querySelector('.whyWeDesc h2')
        const whyWeDescP = document.querySelector('.whyWeDesc ul')

        whyWeDescH2.classList.add('animate')
        whyWeDescP.classList.add('animate')
    }
    // ----------------------------------------------------------------------


    // Testimonials -----------------------------------------------------------------
    if(window.scrollY > 2900){

        const testimonialsH2 = document.querySelector('.testimonials h2')
        
        testimonialsH2.classList.add('animate')
    }
    
    if(window.scrollY > 2950){
        const userTextP = document.querySelectorAll('.user-text p')
        const userTextH3 = document.querySelectorAll('.user-text h3')
        const userTextPos = document.querySelectorAll('.user-text .pos')
        const userImg = document.querySelectorAll('.user-img')

        userTextP.forEach(p => {
            p.classList.add('animate')
        })
        userTextH3.forEach(h3 => {
            h3.classList.add('animate')
        })
        userTextPos.forEach(pos => {
            pos.classList.add('animate')
        })
        userImg.forEach(img => {
            img.classList.add('animateX')
        })
    }
    // ---------------------------------------------------------------------------------



    // Feedback ------------------------------------------------------------------------

    if(window.scrollY > 5500 && window.screen.width <= 414){

        const feedbackH2 = document.querySelector('.feedback h2');
        
        feedbackH2.classList.add('animate')
    }

    if(window.scrollY > 5800 && window.screen.width <= 414){

        const userCardImg = document.querySelectorAll('.user-img')

        userCardImg.forEach(u => {
            u.classList.add('animate')
        })
    }

    if(window.scrollY > 6000 && window.screen.width <= 414){

        const userCardDesc = document.querySelectorAll('.user-desc')

        userCardDesc.forEach(ud => {
            ud.classList.add('animate')
        })

    }

    if(window.scrollY > 6200 && window.screen.width <= 414){

        const radio = document.querySelector('.radio')

        radio.classList.add('animate')

    }

    // --------------------------------------------------------------------------------

    // Clients---------------------------------------------------------------------
    if(window.scrollY > 3500 && window.screen.width > 414){
        const clientH2 = document.querySelector('.clients-container h2')
        const slider = document.querySelector('.slider')

        clientH2.classList.add('animate')
        slider.classList.add('animate')

    }

    if(window.scrollY > 6600 && window.screen.width <= 414){
        const clientH2 = document.querySelector('.clients-container h2')
        const slider = document.querySelector('.slider')

        clientH2.classList.add('animate')
        slider.classList.add('animate')

    }
    // --------------------------------------------------------------------------------


    // Footer Section ------------------------------------------------------------------
    if(window.scrollY > 4100 && window.screen.width > 414){
        const footerLogo = document.querySelector('.brandLogo')
        const aboutH2 = document.querySelectorAll('.about h2')
        const aboutP = document.querySelectorAll('.about p')
        const addressH2 = document.querySelector('.address h2')
        const addressPs = document.querySelectorAll('.address p')
        const social = document.querySelector('.address .social')
        

        footerLogo.classList.add('animateX')
        aboutH2[0].classList.add('animate')
        aboutP[0].classList.add('animate')

        aboutH2[1].classList.add('animate')
        aboutP[1].classList.add('animate')
        aboutP[2].classList.add('animate')
        addressH2.classList.add('animate')
        addressPs.forEach(p => {
            p.classList.add('animate')
        })
        social.classList.add('animate')
    
    }

    if(window.scrollY > 7000 && window.screen.width <= 414){
        const footerLogo = document.querySelector('.brandLogo')
        footerLogo.classList.add('animateX')
    }

    if(window.scrollY > 7150 && window.screen.width <= 414){
        const aboutH2 = document.querySelectorAll('.about h2')
        const aboutP = document.querySelectorAll('.about p')

        aboutH2[0].classList.add('animate')
        aboutP[0].classList.add('animate')

        aboutH2[1].classList.add('animate')
        aboutP[1].classList.add('animate')
    }
    
    if(window.scrollY > 7200 && window.screen.width <= 414){
        const addressH2 = document.querySelector('.address h2')
        const addressPs = document.querySelectorAll('.address p')

        addressH2.classList.add('animate')
        addressPs.forEach(p => {
            p.classList.add('animate')
        })
    }
    
    if(window.scrollY > 7300 && window.screen.width <= 414){
        const social = document.querySelector('.address .social')
        social.classList.add('animate')
    }
    
    // -----------------------------------------------------------------------------------


    // Copyright------------------------------------------------------------------------
    if(window.scrollY > 4200 && window.screen.width > 414){
        const copyright = document.querySelector('.copyright p')
        copyright.classList.add('animate')
    }

    if(window.scrollY > 7400 && window.screen.width <= 414){
        const copyright = document.querySelector('.copyright p')
        copyright.style.transitionDelay = "0"
        copyright.classList.add('animate')
    }

})




// Testimonials-------------------------------------------------------
let button = document.querySelectorAll('.btn')
let slide = document.getElementById('slide')

let counter = 1;
setInterval(() => {
    button[counter].click()
    counter++;
    if(counter > 7){
        counter = 0;
    }

}, 5000)


button[0].onclick = () => {
    slide.style.transform = "translateX(0px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[0].classList.add('active')
    counter = 0
}
button[1].onclick = () => {
    slide.style.transform = "translateX(-800px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[1].classList.add('active')
    counter = 1
}
button[2].onclick = () => {
    slide.style.transform = "translateX(-1600px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[2].classList.add('active')
    counter = 2
}
button[3].onclick = () => {
    slide.style.transform = "translateX(-2400px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[3].classList.add('active')
    counter = 3
}
button[4].onclick = () => {
    slide.style.transform = "translateX(-3200px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[4].classList.add('active')
    counter = 4
}
button[5].onclick = () => {
    slide.style.transform = "translateX(-4000px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[5].classList.add('active')
    counter = 5
}
button[6].onclick = () => {
    slide.style.transform = "translateX(-4800px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[6].classList.add('active')
    counter = 6
}
button[7].onclick = () => {
    slide.style.transform= "translateX(-5600px)"
    for(i=0; i < 8; i++){
        button[i].classList.remove('active')
    }
    button[7].classList.add('active')
    counter = 7
}

// ------------------------------------------------------------------------------


// Feedback for phone-------------------------------------------------------------

const bttn = document.querySelectorAll('.radio .bttn')
const swipe = document.getElementById('swipe')

let cntr = 1;
setInterval(() => {
    bttn[cntr].click()
    cntr++;
    if(cntr > 7){
        cntr = 0;
    }

}, 5000)


bttn[0].onclick = () => {
    swipe.style.transform = "translateX(0px)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[0].classList.add('active')
    cntr = 0
}

bttn[1].onclick = () => {
    swipe.style.transform = "translateX(-12.5%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[1].classList.add('active')
    cntr = 1
}

bttn[2].onclick = () => {
    swipe.style.transform = "translateX(-25%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[2].classList.add('active')
    cntr = 2
}

bttn[3].onclick = () => {
    swipe.style.transform = "translateX(-37.5%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[3].classList.add('active')
    cntr = 3
}

bttn[4].onclick = () => {
    swipe.style.transform = "translateX(-50%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[4].classList.add('active')
    cntr = 4
}

bttn[5].onclick = () => {
    swipe.style.transform = "translateX(-62.5%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[5].classList.add('active')
    cntr = 5
}

bttn[6].onclick = () => {
    swipe.style.transform = "translateX(-75%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[6].classList.add('active')
    cntr = 6
}

bttn[7].onclick = () => {
    swipe.style.transform = "translateX(-87.5%)"
    for(i=0; i < 8; i++){
        bttn[i].classList.remove('active')
    }
    bttn[7].classList.add('active')
    cntr = 7
}

// bttn[0].onclick = () => {
//     swipe.style.transform = "translateX(0px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[0].classList.add('active')
//     cntr = 0
// }

// bttn[1].onclick = () => {
//     swipe.style.transform = "translateX(-370px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[1].classList.add('active')
//     cntr = 1
// }

// bttn[2].onclick = () => {
//     swipe.style.transform = "translateX(-740px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[2].classList.add('active')
//     cntr = 2
// }

// bttn[3].onclick = () => {
//     swipe.style.transform = "translateX(-1110px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[3].classList.add('active')
//     cntr = 3
// }

// bttn[4].onclick = () => {
//     swipe.style.transform = "translateX(-1480px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[4].classList.add('active')
//     cntr = 4
// }

// bttn[5].onclick = () => {
//     swipe.style.transform = "translateX(-1850px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[5].classList.add('active')
//     cntr = 5
// }

// bttn[6].onclick = () => {
//     swipe.style.transform = "translateX(-2220px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[6].classList.add('active')
//     cntr = 6
// }

// bttn[7].onclick = () => {
//     swipe.style.transform = "translateX(-2590px)"
//     for(i=0; i < 8; i++){
//         bttn[i].classList.remove('active')
//     }
//     bttn[7].classList.add('active')
//     cntr = 7
// }

// ------------------------------------------------------------------------------- 

$(document).ready(() => {
    $('.customer-logos').slick({
        slidesToShow : 6,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 1000,
        arrows : false,
        dots :false,
        pauseOnHover : false,
        centerMode : true,
        variableWidth : true,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
})
