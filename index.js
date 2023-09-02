// const serviceButtons = document.querySelectorAll('.service_item');
// const serviceDetails = document.querySelector('.services_right');

// const getService = (category) => {
//     const details = serviceData.find(item=>category===category);
//     serviceDetails.innerHTML = `
//     <h3>{details.title}</h3>
//     ${details.description.map(paragraph=>"<p>" +paragraph+ "</p>")}
//     `
// }

// serviceButtons.forEach(item=>{
//     item.addEventListener('click', ()=>{
//         const serviceClass = item.classList[1];
//         getService(serviceClass)
//     })
// })

const serviceButtons = document.querySelectorAll('.service_item');

        // Get references to the buttons and paragraphs
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const button3 = document.getElementById("button3");

        const paragraph1 = document.getElementById("paragraph1");
        const paragraph2 = document.getElementById("paragraph2");
        const paragraph3 = document.getElementById("paragraph3");

        const removeActiveClass = () => {
            serviceButtons.forEach(button=>{
                button.classList.remove('active');
            })
        }
        // Add click event listeners to the buttons
        button1.addEventListener("click", function() {
            removeActiveClass();
            paragraph1.style.display = "block";
            button1.classList.add('active');
            paragraph2.style.display = "none";
            paragraph3.style.display = "none";
        });

        button2.addEventListener("click", function() {
            removeActiveClass();
            paragraph1.style.display = "none";
            button2.classList.add('active');
            paragraph2.style.display = "block";
            paragraph3.style.display = "none";
        });

        button3.addEventListener("click", function() {
            removeActiveClass();
            paragraph1.style.display = "none";
            button3.classList.add('active');
            paragraph2.style.display = "none";
            paragraph3.style.display = "block";
        });



        // mixitup
        const containerEl = document.querySelector('.projects_container');
        var mixer = mixitup(containerEl,{
            animation: {
                enable: false
            }
        });
        mixer.filter('*');



        const swiper = new Swiper('.swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                  },

                breakpoints: {
                    600: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }
            });



//nav menu


const navMenu = document.querySelector('.nav_menu');      
const navOpenBtn = document.querySelector('.nav_toggle_open');
const navCloseBtn = document.querySelector('.nav_toggle_close');

const openNavHandler = () =>{
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () =>{
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);

//close nav menu on click of nav link on small screens

const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768){
    navItems.forEach(item=>{
        item.addEventListener('click', closeNavHandler)
    })
}

//light and dark mode
const themeBtn = document.querySelector('.nav_theme_btn');
themeBtn.addEventListener('click', ()=>{
    let bodyClass = document.body.className;
    if(!bodyClass){
        bodyClass = 'dark';
        document.body.className = bodyClass;
        //change toggle icon
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
        window.localStorage.setItem('theme', bodyClass);
    }else{
        bodyClass = '';
        document.body.className = bodyClass;
        //change toggle icon
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        window.localStorage.setItem('theme', bodyClass);
    }
})

//load theme on load
window.addEventListener('load', ()=>{
    document.body.className = window.localStorage.getItem('theme');
})