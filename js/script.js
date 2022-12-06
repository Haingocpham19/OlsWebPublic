document.body.style.setProperty('--background-color-active', 'white');

$('#menu-top li:first-child').addClass('active');

function scrollFunction() {
    
    let currentPosition = document.documentElement.scrollTop;

    if (currentPosition > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("header").style.position = "fixed";
        document.querySelector("header").style.backgroundColor = "#fff";
        document.querySelector("header").style.boxShadow = "0 8px 29px rgb(0 0 0 / 10%)";
        document.querySelector("header").style.color = "#000";
        document.querySelector("#logo-white").style.display = "none";
        document.querySelector("#logo-black").style.display = "block";
        document.querySelector(".btn-trial").style.border = "1px solid #e0e0e0";
        document.querySelector(".btn-login").style.backgroundColor = "#FCB815";
        document.body.style.setProperty('--background-color-active', 'red');
    }else{
        document.querySelector("header").style.position = "absolute";
        document.querySelector("header").style.backgroundColor = "unset";
        document.querySelector("header").style.color = "#fff";
        document.querySelector("#logo-white").style.display = "block";
        document.querySelector("#logo-black").style.display = "none";
        document.querySelector("header").style.boxShadow = "unset";
        document.querySelector(".btn-login").style.backgroundColor = "unset";
        document.body.style.setProperty('--background-color-active', 'white');
    } 

    let positionIntroduce = $("#introduce").position().top - 200;
    let positionFeature = $("#feature").position().top - 200;

    if(currentPosition<positionIntroduce){
        $('#menu-top li').removeClass('active');
        $('#menu-1').addClass('active');
    }else if(currentPosition>positionIntroduce&&currentPosition<positionFeature){
        $('#menu-top li').removeClass('active');
        $('#menu-2').addClass('active');
    }
    else if(currentPosition>positionFeature){
        $('#menu-top li').removeClass('active');
        $('#menu-3').addClass('active');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};
