// funktioner som används på flera sidor
function toggleMode(){
    html = document.getElementsByTagName("html");
    html[0].classList.toggle("theme-dark");
    html[0].classList.toggle("theme-light");
}
