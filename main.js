function pixelfy(number) {
    return number.toString() + "px"
}

function setup() {
    $(".stayingSafe")[0].style.height = "auto" // Set staying safe to auto to get the default height

    var winHeight = $(window).height()
    var windowHeight = pixelfy(winHeight);
    var pages = [".header", ".about", ".data", ".stayingSafe", ".symptoms"]
    
    for (i = 0; i < pages.length; i++) {
        pageName = pages[i]
        page = $(pageName)[0]
        if (pageName != ".stayingSafe" && pageName != ".symptoms") {
            page.style.height = windowHeight
        } else if (pageName == ".stayingSafe") {
            page.style.height = pixelfy(Math.max(winHeight, $(".stayingSafe").height()))
        } else if (pageName == ".symptoms") {
            page.style.height = pixelfy($(".stayingSafe").height())
        }
    }
}

function navbarHandler() {
    var scrollPos = $(this).scrollTop();
    var navbar = $("#navbar");

    if (scrollPos < 50) {
        navbar.css("position", "absolute");
        navbar.css("background-color", "rgba(0,0,0,0)");
        navbar.css("boxShadow", "")
    } else {
        navbar.css("position", "fixed")
        navbar.css("background-color", "#ffffff")
        navbar.css("boxShadow", "0px 0px 10px black")
    }
}

function scrollHome() {
    window.scrollTo(0, 0)
}

function scrollAbout() {
    window.scrollTo(0, $(window).height())
}

function scrollData() {
    window.scrollTo(0, 2 * $(window).height())
}

function scrollStayingSafe() {
    window.scrollTo(0, 3 * $(window).height())
}

function scrollSources() {
    window.scrollTo(0, $(document).height())
}

$(document).ready(setup)
$(window).resize(setup)
$(window).scroll(navbarHandler)
