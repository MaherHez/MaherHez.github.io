//--------- JS-modal-projectpage ------------///

const modal = document.querySelectorAll(".modal");
const btn = document.querySelectorAll(".btn")
const span = document.querySelectorAll(".close");

var currentIndex;


for (let i = 0; i < btn.length; i++) {

    btn[i].onclick = function () {
        modal[i].style.display = "block";
        currentIndex = i;

    }
}


for (let i = 0; i < span.length; i++) {

    span[i].onclick = function () {
        modal[i].style.display = "none";

    }
}

window.onclick = function (event) {
    if (event.target == modal[currentIndex]) {
        modal[currentIndex].style.display = "none";
    }
}

//--------- Dark-mode ------------///
if (document.getElementById("checkbox")) {

    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });

}

