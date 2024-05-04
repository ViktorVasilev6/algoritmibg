
function toggleMode(noAnimation) {
    if(noAnimation) {
        document.documentElement.classList.add('no-transition');
    }

    var currMode = window.getComputedStyle(document.querySelector("body")).color;
    currMode = currMode.substring(4, currMode.length - 1).replace(/ /g, '').split(',')[0] == 0 ? "light" : "dark";

    if(currMode === 'light') {
        // Images
        var img = document.querySelectorAll("article img");
        if(img != null) {
            img.forEach(el => {
                el.style.filter = "invert(0%)";
            });
        }
        
        // Text
        var body = document.querySelector("body");
        body.style.color = "#FFFFFF";
        body.style.setProperty('--global-bg-clr', "#141414");

        // Nav
        var nav = document.querySelector("nav");
        nav.style.backgroundColor = "#000000";
        nav = document.querySelector("nav h1");
        nav.style.color = "#F1F1F1";
        nav = document.querySelectorAll("nav > div ul a")
        nav.forEach(el => {
            el.style.color = "#FFFFFF";
            el.style.setProperty('--nav-hover-clr', '#1A1A1A');
            el.style.setProperty('--nav-bg-clr', '#1B1B1B');
        });

        // Button
        var btn = document.querySelector("main div div a");
        btn.style.color = "#000000";
        console.log(btn);
    } else {
        // Images
        var img = document.querySelectorAll("article img");
        if(img != null) {
            img.forEach(el => {
                el.style.filter = "invert(100%)";
            });
        }
        
        // Text
        var body = document.querySelector("body");
        body.style.color = "#000000";
        body.style.setProperty('--global-bg-clr', "#f0f5fd");

        // Nav
        var nav = document.querySelector("nav");
        nav.style.backgroundColor = "#FFFFFF";
        nav = document.querySelector("nav h1");
        nav.style.color = "#364670";
        nav = document.querySelectorAll("nav > div ul a")
        nav.forEach(el => {
            el.style.color = "#000000";
            el.style.setProperty('--nav-hover-clr', '#F9F9F9');
            el.style.setProperty('--nav-bg-clr', '#F5F5F5');
        });

        // Button
        var btn = document.querySelector("main div div a");
        btn.style.color = "#000000";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    toggleMode(true);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.documentElement.classList.remove('no-transition');
    }, 50);
});