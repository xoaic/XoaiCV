const sections = document.querySelectorAll("section");
const name1 = document.getElementById("nickname");
const name2 = document.getElementById("name");
let currentSection = 0;
let scrollPosition = 0;

// function toggleNames() {
//     name1.classList.toggle("hidden");
//     name2.classList.toggle("hidden");
// }
//
// setInterval(toggleNames, 1500);

const barBtns = document.querySelectorAll(".bar-btn");

barBtns.forEach(function(barBtn) {
    barBtn.addEventListener("click", function() {
        barBtns.forEach(function(btn) {
            btn.classList.remove("bar-btn-active");
        });
        this.classList.add("bar-btn-active");
    });
});


function viewTab(type) {
    const thisType = document.getElementById(type);
    const types = document.getElementsByClassName("proj-type");
    for (let i = 0; i < types.length; i++) {
        types[i].classList.add("hidden");
    }
    thisType.classList.remove("hidden");
}

window.addEventListener("wheel", function(event){
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollPosition = sections[currentSection].offsetTop;
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollPosition = sections[currentSection].offsetTop;
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    }

    setTimeout(function() {
        if (window.scrollY !== scrollPosition) {
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        }
    }, 500);
});
