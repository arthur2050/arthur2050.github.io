

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
    // slides[currentSlide].id="sh_id";
    slides[currentSlide].onclick=nextSlide;
}


var next = document.getElementById('next');
var previous = document.getElementById('previous');
var showing_click=document.getElementsByClassName("showing");
// var showing_click=document.getElementById('sh_id');
next.onclick = function(){
    // pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    // pauseSlideshow();
    previousSlide();
};
showing_click[0].onclick=function(){
 	nextSlide();
 }