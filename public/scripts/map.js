const map = L.map('mapid', {
    center: [-20.231, -44.250],
    zoom: 4,
    zoomControl: false
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '<strong>COVID-19</strong>',
    maxZoom: 4,
    minZoom: 4,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVjYXNhdWd1c3RzIiwiYSI6ImNraWt2cTluczBkdHAzMnFpNDkzMmp4ZHIifQ.F_7HtbNL_iCunJQ0AjR7OQ'
}).addTo(map);


