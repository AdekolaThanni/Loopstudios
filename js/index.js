$(".hamburger").click(function () {
    $(".navigation").toggleClass("hamburger-mode-flex");
    $(".navigation").toggleClass("hamburger-mode-opacity");
    
    if ($(".hamburger").attr("src") == "images/icon-hamburger.svg"){
        $(".hamburger").attr("src", "images/icon-close.svg");
    } else {
        $(".hamburger").attr("src", "images/icon-hamburger.svg");
    }
})