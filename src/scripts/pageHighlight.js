var pageNr = document.querySelector(".pageNr").innerHTML;
var iconClr = document.querySelector(".iconClr").innerHTML;

var li = document.querySelectorAll("nav ul .nav-item");
li[pageNr - 1].style.backgroundColor = "var(--nav-item-bg-clr)";
      
var icon = li[pageNr - 1].querySelector("i");
icon.style.color = "var(" + iconClr + ")";