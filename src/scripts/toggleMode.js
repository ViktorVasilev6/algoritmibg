const theme = localStorage.getItem("theme");

const light = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/intellij-light.min.css';
const dark = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/equilibrium-gray-dark.css';

let hljsLink = document.createElement('link');
hljsLink.rel = 'stylesheet';
hljsLink.classList.add('hljsLink');
hljsLink.setAttribute('href', theme === 'dark' ? dark : light);
document.head.appendChild(hljsLink);

if(localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'light');
    hljsLink.setAttribute('href', light);
    document.head.appendChild(hljsLink);
}   
else if (theme === "dark") {
    var newhljsLink = document.querySelector('.hljsLink');
    hljsLink.setAttribute('href', dark);
    document.head.replaceChild(hljsLink, newhljsLink);
    document.documentElement.classList.add('no-transition');
    document.documentElement.classList.add("dark");
}

function toggleMode(noAnimation) {
    if(noAnimation) {
        document.documentElement.classList.add('no-transition');
    }

    if(localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme','dark');
        // Images
        var img = document.querySelectorAll("article img");
        if(img) {
            img.forEach(el => {
                el.style.filter = "invert(0%)";
            });
        }
        var icon = document.querySelector(".nav-button i");
        icon.classList.replace('fa-moon', 'fa-sun');
        // Code
        var newhljsLink = document.querySelector('.hljsLink');
        newhljsLink.setAttribute('href', dark);
        document.head.replaceChild(newhljsLink, hljsLink);


    } else {
        localStorage.setItem('theme','light');
        // Images
        var img = document.querySelectorAll("article img");
        if(img) {
            img.forEach(el => {
                el.style.filter = "invert(100%)";
            });
        }
        var icon = document.querySelector(".nav-button i");
        icon.classList.replace('fa-sun', 'fa-moon');
        // Code
        var newhljsLink = document.querySelector('.hljsLink');
        newhljsLink.setAttribute('href', light);
        document.head.replaceChild(newhljsLink, hljsLink);
    }
    // Button
    var btn = document.querySelector("main div div a");
    if(btn) {
        btn.style.color = "#000000";
    }
    document.documentElement.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector("main div div a");
    if(btn) {
        btn.style.color = "#000000";
    }
    var icon = document.querySelector(".nav-button i");
    if (theme === "dark") {
        var img = document.querySelectorAll("article img");
        if(img) {
            img.forEach(el => {
                el.style.filter = "invert(0%)";
            });
        }
        icon.classList.add('fa-sun');
    } else {
        icon.classList.add('fa-moon');
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.documentElement.classList.remove('no-transition');
    }, 50);
});