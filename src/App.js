import './App.css';
import Header from "./components/Header.jsx";
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import markers from "./vendingDataWithCoords";

const testMarkers = [
  {
    geocode: [34.15522319337796, -118.2447133],
    popUp: "Hello from the VM #1!",
    address: "561 N Glendale Ave Glendale, CA",
    hyperLink: "https://www.google.com/maps/place/Vons/@34.1495057,-118.2736452,14672m/data=!3m2!1e3!5s0x80c2c1aed243401f:0x6349a580da1c3cee!4m6!3m5!1s0x80c2c1aecf011757:0x85a4f61dca22378a!8m2!3d34.1549844!4d-118.2448076!16s%2Fg%2F1tf24bs9?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
]


const customIcon = new Icon({
  iconUrl: require('./img/pokeball.svg.png'),
  iconSize: [32,32]
})

function createMarker (marker){
  return (
    <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
      <Popup>{marker.address}</Popup>
    </Marker>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <MapContainer center={[34.0549,-118.2426]} zoom={8}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          // testMarkers.map(marker=>(
          //   <Marker position={marker.geocode} icon={customIcon}>
          //     {/* <Popup>{<a href={marker.hyperLink} target="_blank" rel="noopener noreferrer">{marker.address}</a>}</Popup> */
          //     <Popup>{marker.address}</Popup>}
          //   </Marker>
          // ))
          markers.map(createMarker)
        };
      </MapContainer>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
