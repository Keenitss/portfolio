// script.js
window.addEventListener("scroll", function () {
    var footer = document.getElementById("footer");
    if (window.scrollY > 0) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});
