document.addEventListener("DOMContentLoaded",()=>{


    const phone = document.querySelector(".phone")

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {  
            phone.classList.add('visible');
        } 
    });

})