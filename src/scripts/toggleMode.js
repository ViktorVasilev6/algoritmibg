const theme = localStorage.getItem("theme");
if(localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'light');
}   
else if (theme === "dark") {
    document.documentElement.classList.add("dark");
}

function toggleMode(noAnimation) {
    if(noAnimation) {
        document.documentElement.classList.add('no-transition');
    }
    // <i class="fa-regular fa-sun"></i>
    if(localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme','dark');
        // Images
        var img = document.querySelectorAll("article img");
        if(img != null) {
            img.forEach(el => {
                el.style.filter = "invert(0%)";
            });
        }
        var icon = document.querySelector(".nav-button i");
        icon.classList.replace('fa-moon', 'fa-sun');

    } else {
        localStorage.setItem('theme','light');
        // Images
        var img = document.querySelectorAll("article img");
        if(img != null) {
            img.forEach(el => {
                el.style.filter = "invert(100%)";
            });
        }
        var icon = document.querySelector(".nav-button i");
        icon.classList.replace('fa-sun', 'fa-moon');
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