$(document).ready(function ($){
    "use strict";
    WebGLSampler.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger:"body",
        start: "30px top",
        end: "bottom bottom",

        onEnter :() => myFunction(),
        onLeaveBackk :() => myFunction(),
    });

    function myFunction()
{
    elementFirst.classList.toggle('sticky_head');
    
}})