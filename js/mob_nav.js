document.addEventListener("DOMContentLoaded",()=>{



    let ham_burger = document.querySelector(".nav_ham")
    let mob_open = document.querySelector(".mob_nav")
    let mob_close = document.querySelector(".nav_close")


    ham_burger.addEventListener("click",()=>{
        mob_open.classList.add("active")
        setTimeout(()=>{
            mob_open.style.transform="translateX(0px)"
        },1)
    })

    mob_close.addEventListener("click",()=>{
        mob_open.style.transform="translateX(-466px)"
        setTimeout(()=>{
            mob_open.classList.remove("active")
        },300)
    })




    // let activePage = window.location.pathname
    // const navLinks = document.querySelectorAll("nav .nav_links a").forEach(
    //     link => {
    //         console.log(link.href);
    //     }
    // )


})