
let b1 = document.querySelector(".button1");
b1.addEventListener("mouseover", function () {
    b1.style.backgroundColor = "darkgrey";
});
b1.addEventListener("mouseout", function () {
    b1.style.backgroundColor = "white";
});
let b2 = document.querySelector(".button2");
b2.addEventListener("mouseover", function () {
    b2.style.backgroundColor = "darkgrey";
});
b2.addEventListener("mouseout", function () {
    b2.style.backgroundColor = "white";
});

const d = document.querySelectorAll(".box");
d.forEach(function (event) {

    event.addEventListener("click", () => {
        document.body.style.backgroundColor = event.id;
     });
});