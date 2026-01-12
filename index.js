
// accordion functionality modifications
var acc1 = document.getElementsByClassName("accordion");
var i;

for(i = 0; i <acc1.length; i++) {
    acc1[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*document.addEventListener('DOMContentLoaded', () => {

})*/