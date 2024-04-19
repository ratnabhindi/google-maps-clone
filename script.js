mapboxgl.accessToken = 'pk.eyJ1IjoiYXNod2luYWR1dHQiLCJhIjoiY2toZmp6a2gyMGlyYzJzcGZxcDlxc2t6YyJ9.1jRm7f0tDKvkVJVxihXjXA';

navigator.geolocation.getCurrentPosition(successFunction, errorFunction, { enableHighAccuracy: true})

function successFunction(position)
{
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorFunction()
{
    setupMap([151.2093, -33.8])
}

function setupMap(centerArray)
{
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerArray,
        zoom: 15
    });

    //add navigation to maps
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    //add directions to map
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
    });
      
    map.addControl(directions, 'top-left');
``
}


