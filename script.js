const sections = document.querySelectorAll("section");
let currentSection = 0;
let scrollPosition = 0;

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
    //Checking if user try to use scrollbar
    setTimeout(function() {
        if (window.scrollY !== scrollPosition) {
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        }
    }, 500);
});
