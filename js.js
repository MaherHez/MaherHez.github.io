//--------- JS-modal-projectpage ------------///

const modal = document.querySelector(".modal");
const btn = document.getElementById("btn")
const span = document.querySelector(".close");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const modal2 = document.querySelector(".modal2");
const btn2 = document.querySelector(".btn2")
const span2 = document.querySelector(".close2");

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}





