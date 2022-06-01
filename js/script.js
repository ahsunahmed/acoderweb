// Side Navbar Menu Script 
var menuBar = document.getElementById("menuBar");
        var sideNav = document.getElementById("sideNav");

        sideNav.style.right = "-250px";
        menuBar.onclick = function(){
            if(sideNav.style.right == "-250px"){
                sideNav.style.right = "0px";
            }
            else{
                sideNav.style.right = "-250px";
            }

        }

// Scroll Js

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
    });        