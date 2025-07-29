import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import {Icon} from 'leaflet';

const userIcon = new Icon({
    iconUrl: require('../img/pin.png'),
    iconSize: [32,32]
})

function UserLocationMarker() {
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Center the map
        map.setView([latitude, longitude], 13);

        // Optional: Add a user marker
        const marker = L.marker([latitude, longitude], {
          title: "Your Location",
          icon: userIcon,
        }).addTo(map);

        marker.bindPopup("You are here.").openPopup();
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  }, [map]);

  return null;
}

export default UserLocationMarker;