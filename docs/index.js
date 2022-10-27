// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 35.307240101907844, lng: -80.73516286504413 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;