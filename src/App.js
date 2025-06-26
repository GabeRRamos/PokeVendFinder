import './App.css';
import Header from "./components/Header.jsx";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";

function App() {
  return (
    <div className="App">
      <Header/>
      <MapContainer center={[34.0549,-118.2426]} zoom={8}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
