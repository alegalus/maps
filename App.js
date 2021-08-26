mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxlZ2FsdXMiLCJhIjoiY2tzcDg5cW1pMDAyODJvcG9qd25kc3lydiJ9.z693bfaqubu2FUBdPkQG1g";

navigator.geolocation.getCurrentPosition(posicionExitosa, posicionError, {
  enableHighAccuracy: true,
});

function posicionExitosa(posicion) {
  console.log(posicion);
  centradoMapa([posicion.coords.longitude, posicion.coords.latitude]);
}

function posicionError() {}

function centradoMapa(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 10,
  });
  let buscador = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

  map.addControl(buscador, 'top-left' )

  let nav = new mapboxgl.NavigationControl()
  map.addControl(nav, );





}



