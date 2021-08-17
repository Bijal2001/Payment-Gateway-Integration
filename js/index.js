//HamBurger Animation
// const hamburger = document.querySelector(".hamburger");
// const navlinks = document.querySelector(".navlink");
// const links = document.querySelectorAll(".navlink li");

// hamburger.addEventListener("click", () => {
//     navlinks.classList.toggle("open");
//     links.forEach(link =>{
//         link.classList.toggle('fade')
//     })
// })

// Animation Changing according to width
const checkWidthDoAnime = () => {
    if (window.outerWidth <= 768) {
        const dataAos = document.body.querySelectorAll('[data-aos]');
        for (let i = 0; i < dataAos.length; i++) {
            dataAos[i].setAttribute('data-aos', 'fade-up');
        }
    }
}

// Contact Form
const contactUs = (event) => {
    const userName = document.querySelector('#Name');
    const userEmail = document.querySelector('#Email');
    const userPhone = document.querySelector('#Phone');
    const userMessage = document.querySelector('#Message');
        swal({
            text: `Name- ${userName.value} \nEmail- ${userEmail.value} \nPhone- ${userPhone.value} \nMessage- ${userMessage.value}`,
            icon: 'success'
        });
        [userName.value, userEmail.value, userPhone.value, userMessage.value] = ['', '', '', ''];
}
