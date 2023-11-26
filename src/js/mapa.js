function initMap() {
    const mapOptions = {
        center: { lat: -19.93909454345703, lng: -44.07603454589844 },
        zoom: 15
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const infowindow = new google.maps.InfoWindow();

    const selectedMarkerInfo = {
        position: { lat: -19.935337, lng: -44.0534132 },
        title: 'Local 2',
        content: '<div><h2>Local 2</h2><p>Detalhes sobre o local 2.</p></div>'
    };

    const selectedMarker = new google.maps.Marker({
        position: selectedMarkerInfo.position,
        map: map,
        title: selectedMarkerInfo.title
    });

    selectedMarker.addListener('click', function() {
        infowindow.setContent(selectedMarkerInfo.content);
        infowindow.open(map, selectedMarker);
        calculateAndDisplayRoute(selectedMarker.getPosition());
    });

    function calculateAndDisplayRoute(destination) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                const directionsService = new google.maps.DirectionsService();
                const directionsRenderer = new google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);

                const request = {
                    origin: userLocation,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING
                };

                directionsService.route(request, function(result, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(result);
                    }
                });
            }, function() {
                handleLocationError(true, infowindow, map.getCenter());
            });
        } else {
            handleLocationError(false, infowindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infowindow, userLocation) {
        infowindow.setContent(browserHasGeolocation ?
            'Erro: O serviço de geolocalização falhou.' :
            'Erro: Seu navegador não suporta geolocalização.');
        infowindow.setPosition(userLocation);
        infowindow.open(map);
    }
}
