var progressBar;
var width;
var time;

document.addEventListener("DOMContentLoaded", async function() {
    progressBar = document.querySelector('.progress-bar');
    if(!progressBar) return;
    var lectureList = document.querySelectorAll('.lecture-list');
    var lectureCnt = 0, totalLectures = 0;

    lectureList.forEach(ul => {
        var li = ul.querySelectorAll("li");
        li.forEach(el => {
            if(el.querySelector("a")) {
                lectureCnt++;
            }
            totalLectures++;
        });
    });
    width = Math.ceil(lectureCnt / totalLectures * 100);
    time = lectureCnt / width * 1000;
    progressBar.style.width = width + "%";
    animateNumber(width);
})

function animateNumber(targetNumber) {
    const duration = 1000;
    const interval = 10;

    let startTime;
    const updateCounter = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if(elapsedTime >= duration) {
            clearInterval(timer);
            progressBar.innerHTML = targetNumber + "%";
        } else {
            const progress = elapsedTime / duration;
            const newNumber = Math.floor(progress * targetNumber);
            progressBar.innerHTML = newNumber + "%";
        }
    };

    const timer = setInterval(updateCounter, interval);
    startTime = Date.now();
}
