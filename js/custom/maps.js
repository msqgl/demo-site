$(function () {

    $("#map").googleMap({
        zoom: 13
    });
    $("#map").addMarker({
        address: "Basilica San Nicolò, Via S. Nicolò, 1, 23900 Lecco LC",
        id: "marker-1",
    });

    $("#map").addMarker({
        address: "Hotel Villa Giulia, Frazione Parè, 69/73, 23868 Valmadrera LC",
        id: "marker-2"
    });

});