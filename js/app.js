
function initMap(){
    var mapaContenedor = document.getElementById("map");
  	var coordenadasLaboratoria= {lat:19.417639, lng:-99.164815};
 
  	var mapa = new google.maps.Map(mapaContenedor,{
       zoom:18,
        center: coordenadasLaboratoria
      });
    var marcador = new google.maps.Marker({
      position: {lat:19.417639, lng:-99.164815},
      map:mapa,
      title: "Laboratoria México",
      draggable: true,
    });

    var inputOrigen = document.getElementById("punto-partida");
    var inputDestino = document.getElementById("punto-destino");
    new google.maps.places.Autocomplete(inputOrigen);
    new google.maps.places.Autocomplete(inputDestino);
  
  
  function buscar(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }

  var latitud,longitud;
  var funcionExito = function(posicion){
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude; 
    mapa.setZoom(18);
    mapa.setCenter({lat:latitud, lng:longitud});
    var miUbicacion = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      map: mapa,
      title: "My ubicación",
      draggable: true,
    });
    
  };

  var funcionError = function(error){
    alert("Tenemos un problema con encontrar tu ubicación.");
  };

  document.getElementById("encuentrame").addEventListener("click", buscar);
}