import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';


const MapSection = () => {

  const [items, setItems] = useState([]);
  const [mapCoords, setMapCoords] = useState({ lat:  42.645312, lng: 21.1733611 });

  useEffect(() => {
    // Load data from local storage on component mount
    const savedItems = JSON.parse(localStorage.getItem('crudItems')) || [];
    setItems(savedItems);
  }, []);

  return (
    <div className="h-[100vh] py-10 flex justify-center items-center relative overflow-hidden flex-col">
      <h2 className='font-black text-5xl mb-14 text-[#3A4D1Cff] uppercase'>Gjej Lokacionet</h2>
      <div className="overflow-hidden rounded-[30px] w-[80%] h-[80%]">
        <MapContainer
          center={[mapCoords.lat, mapCoords.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          id="map"
          zoomControl={false}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {items.map((item, index) => (
            <Marker
              position={[item.mapCoords.lat, item.mapCoords.lng]}
              draggable={false}>
              <Popup>
                <h4 className="font-bold text-xl">{ item.title }</h4>
                <span>{ item.description}</span>
              </Popup>
            </Marker>
          ))}

          <UseMapEventsComponent setMapCoords={setMapCoords} />
        </MapContainer>
      </div>
    </div>
  );
};

const UseMapEventsComponent = ({ setMapCoords }) => {
  // Use useMapEvents here to capture map events
  const map = useMapEvents({
    click: (e) => {
      setMapCoords(e.latlng);
    },
  });

  return null;
};


export default MapSection;