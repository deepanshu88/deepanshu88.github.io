
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


function toggleExtra() {
  var extraText = document.getElementById("extra-text");
  var btn = document.getElementById("toggle-btn");
  if (extraText.style.display === "none") {
    extraText.style.display = "inline";
    btn.innerHTML = "Show Less";
  } else {
    extraText.style.display = "none";
    btn.innerHTML = "Read More";
  }
}



ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p1, .about-content', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var isAnimated = false; 

window.onscroll = function() {
    if (!isAnimated) { 
        var skillBarWrapper = document.getElementById('skill-bar-wrapper');
        var hT = skillBarWrapper.offsetTop;
        var hH = skillBarWrapper.offsetHeight;
        var wH = window.innerHeight;
        var wS = window.pageYOffset || document.documentElement.scrollTop;
        if (wS > (hT+hH-1.4*wH)){
            var skillbarContainers = document.querySelectorAll('.skillbar-container');
            skillbarContainers.forEach(function(skillbarContainer) {
                var skills = skillbarContainer.querySelector('.skills');
                var width = parseInt(skillbarContainer.getAttribute('data-percent')); 
                animateWidth(skills, width);
            });
            isAnimated = true; 
        }
    }
};

function animateWidth(element, targetWidth) {
    var width = 0;
    var id = setInterval(frame, 5); 
    function frame() {
        if (width >= targetWidth) {
            clearInterval(id);
        } else {
            width += 0.1; 
            element.style.width = width + '%'; 
        }
    }
}

