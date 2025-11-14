document.addEventListener("DOMContentLoaded", function() {
    const verDetallesBton = document.getElementById("verDetalles");
    const routeDetails = document.querySelector(".route-details");
    const routeCards = document.querySelectorAll(".route-card");

    verDetallesBton.addEventListener("click", function() {
        routeDetails.classList.toggle("route-details-expanded");
    });

    routeCards.forEach(function(routeCard) {
        routeCard.addEventListener("mouseenter", function() {
            routeCard.classList.toggle("route-card-selected");
        });
        routeCard.addEventListener("mouseleave", function() {
            routeCard.classList.toggle("route-card-selected");
        });
    });
});