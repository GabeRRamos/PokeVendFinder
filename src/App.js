import './App.css';
import Header from "./components/Header.jsx";
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import markers, {states, stateCenters} from "./vendingDataWithCoords";
import UserLocationMarker from './components/UserLocation';
import Dropdown from './components/Dropdown/Dropdown';
import DropdownItem from './components/DropdownItem/DropdownItem';
import {useRef } from 'react';


const customIcon = new Icon({
  iconUrl: require('./img/pokeball.svg.png'),
  iconSize: [32,32]
})



function App() {
  const mapRef = useRef(null);

  function createMarker (marker){

    return (
      <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
        <Popup>
          <div className='Popup'>
            {marker.retailer}
            <br/>
            {"Id: " + marker.machineId}
            <br/>
            <a href={`https://www.google.com/maps?q=${marker.lat},${marker.lng}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >{marker.address}</a>
          </div>
          </Popup>
      </Marker>
    )
  }

  function handleClick(state){
    console.log(`${state} was clicked `);
    const coords = stateCenters[state];
    if (mapRef.current) {
      mapRef.current.setView(coords, 7);
      console.log(`✅ Moved to ${state}`);
    } else {
      console.warn("⚠️ Map not ready yet");
    }
  }
  return (
    <div className="App">
      <Header/>
      <div className="sidebar">
        <Dropdown 
          buttonText="Select a State" 
          content={<>
              {
                states.map((state, index)=> <DropdownItem key={index} onClick={() => handleClick(state)}>{state}</DropdownItem>)
              }
            </>
          }
        />
      </div>
      <MapContainer className='leaflet-container' center={[70.0549, -118.2426]}
        zoom={8}
        ref={mapRef}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          markers.map(createMarker)
        }
        <UserLocationMarker/>
      </MapContainer>
    </div>
  );
}

export default App;
