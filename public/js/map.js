const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=AHYpBlT0jFOJjW8iJgDx',
    center: coordinates,
    zoom: 12
  });
  
  map.dragRotate.disable();
  map.keyboard.disable();
  map.touchZoomRotate.disableRotation();
  
  const popup = new maplibregl.Popup({
    offset: 25,
    closeOnClick: true,
    closeButton: true
  }).setHTML(`<h4>${listingTitle}</h4><p>You'll be living here!</p>`);
  
  const marker = new maplibregl.Marker({
    color: "red",
    draggable: true
  })
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);
  
  marker.getPopup().addTo(map);
  