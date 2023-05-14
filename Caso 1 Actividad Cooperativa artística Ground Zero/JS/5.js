const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
let map;

function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
 center: {lat: 43.5293, lng: -5.6773},
     zoom: 13,
   });
   var marker = new google.maps.Marker({
     position: {lat: 43.542194, lng: -5.676875},
     map: map,
title: 'Acuario de Gijón'
   });
 }

 
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar Menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});


