document.body.style.setProperty('--background-color-active', 'white');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
}

function scrollToIntroduce($event){

    document.querySelector("#menu-top .active").classList.remove("active");

    $event.currentTarget.className = "active";
    
    let element = document.querySelector("#introduce");
    element.scrollIntoView({behavior: "smooth",block: "center", inline: "nearest"});
}

window.onscroll = function () {
    scrollFunction();
};
