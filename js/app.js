
function initMap(){
    var mapaContenedor = document.getElementById("map");
  	var coordenadasLaboratoria= {lat:19.417639, lng:-99.164815};
 
  	var mapa= new google.maps.Map(mapaContenedor,{
       zoom:18,
        center: coordenadasLaboratoria
      });
    var marcador = new google.maps.Marker({
      position: {lat:19.417639, lng:-99.164815},
      map:mapa,
      title: "Laboratoria México",
      draggable: true,
    });
  }
  
function buscar(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }
}


var funcionExito = function(posicion){
  var latitud,longitud;
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude; 
  console.log(latitud, longitud);
  var mapa= new google.maps.Map(document.getElementById("map"),{
       zoom:18,
        center: {lat:latitud, lng:longitud}
      });
  var miUbicación = new google.maps.Marker({
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