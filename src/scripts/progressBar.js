var progressBar;
var width;
var time;

document.addEventListener("DOMContentLoaded", function() {
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
    console.log(time);
    progressBar.style.width = width + "%";
    progressBar.innerHTML = width + "%";
})
