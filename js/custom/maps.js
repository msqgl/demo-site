$(function () {

    var address1 = "Basilica San Nicolò, Via S. Nicolò, 1, 23900 Lecco LC";
    var address2 = "Hotel Villa Giulia, Frazione Parè, 69/73, 23868 Valmadrera LC";

    var mapId = "#map";

    $(mapId).googleMap({
        zoom: 13
    });

    $(mapId).addMarker({
        address: address1,
        id: "marker-1"
    });

    $(mapId).addMarker({
        address: address2,
        id: "marker-2"
    });

    $("#address-link-1").attr("href", "https://maps.google.com/?q=" + address1);
    $("#address-link-2").attr("href", "https://maps.google.com/?q=" + address2);

});