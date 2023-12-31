$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    $('.bg').css({
        'transform' : 'translate(0px, '+ wScroll/8 +'%)'
    });
    $('.bg2').css({
        'transform' : 'translate(0px, '+ wScroll/8 +'%)'
    });
    $('.bg3').css({
        'transform' : 'translate(0px, '+ wScroll/18 +'%)'
    });
    $('.bg4').css({
        'transform' : 'translate(0px, '+ wScroll/26 +'%)'
    });
});
let text = document.getElementById('text');
window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
});
var cs = document.querySelector("#cursor");
var cs2 = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(e){
    cs.style.left=e.x -1+"px";
    cs.style.top=e.y +2+ "px";
    cs2.style.left=e.x -15 +"px";
    cs2.style.top=e.y -15+"px";
});
// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// scroll sections active link
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon navbar  when click anvbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scroll reveal
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});
// typed js
const typed= new Typed('.multiple-text',{
    strings:['Web Developer','Competitive Programmer','Freelancer'],
    typeSpeed:100,
    backSpeed:60,
    backDelay:1000,
    loop:true
});
