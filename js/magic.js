
//functions mangage the content switching
function toAbout() {
    window.location.href = "index.html";
}

function toContact() {
    window.location.href = "contact.html";
}

function toPortfolio() {
    window.location.href = "portfolio.html";
}



//Code that makes button show hover and press, would like to find a more recursive way to do this, looks nasty! P.S I know you could do this in css, but I just can't wait for some js
document.getElementById("about").addEventListener("mouseenter", function () {
    document.getElementById("about").style.backgroundColor = "White";
})

document.getElementById("about").addEventListener("mouseleave", function () {
    document.getElementById("about").style.backgroundColor = "#1d1616";
})

document.getElementById("about").addEventListener("mousedown", function () {
    document.getElementById("about").style.backgroundColor = "cyan";
})

document.getElementById("contact").addEventListener("mouseenter", function () {
    document.getElementById("contact").style.backgroundColor = "White";
})

document.getElementById("contact").addEventListener("mouseleave", function () {
    document.getElementById("contact").style.backgroundColor = "#1d1616";
})

document.getElementById("contact").addEventListener("mousedown", function () {
    document.getElementById("contact").style.backgroundColor = "cyan";
})

document.getElementById("portfolio").addEventListener("mouseenter", function () {
    document.getElementById("portfolio").style.backgroundColor = "White";
})

document.getElementById("portfolio").addEventListener("mouseleave", function () {
    document.getElementById("portfolio").style.backgroundColor = "#1d1616";
})

document.getElementById("portfolio").addEventListener("mousedown", function () {
    document.getElementById("portfolio").style.backgroundColor = "cyan";
})

if(document.getElementById("f1")){ //returns true if button exists, avoids the script dying everytime the button does not exist

    document.getElementById("f1").addEventListener("mouseenter", function () {
        document.getElementById("f1").style.backgroundColor = "White";
    })

    document.getElementById("f1").addEventListener("mouseleave", function () {
        document.getElementById("f1").style.backgroundColor = "#1d1616";
    })
    
    document.getElementById("f1").addEventListener("mousedown", function () {
        document.getElementById("f1").style.backgroundColor = "cyan";
    })   
}

