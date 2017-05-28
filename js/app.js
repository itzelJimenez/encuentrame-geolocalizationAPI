
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
  