// Side Menu JS
function openSideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "50px";

}

function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Last Modified JS
var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;