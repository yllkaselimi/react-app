import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const Crud = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [mapCoords, setMapCoords] = useState({ lat: 42.645312, lng: 21.1733611 });

  useEffect(() => {
    // Load data from local storage on component mount
    const savedItems = JSON.parse(localStorage.getItem('crudItems')) || [];
    setItems(savedItems);
  }, []);

  const handleSave = () => {
    // Create a new item object
    console.log(imageFile);
    const newItem = {
      title,
      description,
      image: imageFile !== '' && imageFile !== null ? URL.createObjectURL(imageFile) : '', // Create a URL for the uploaded image
      mapCoords: { ...mapCoords },
    };

    // Update the state with the new item
    setItems([...items, newItem]);

    // Save the updated data to local storage
    localStorage.setItem('crudItems', JSON.stringify([...items, newItem]));

    // Clear the input fields
    setTitle('');
    setDescription('');
    setImageFile(null);
    setMapCoords({ lat: 0, lng: 0 });
  };

  const handleDelete = (index) => {
    // Create a copy of the items array and remove the item at the specified index
    const updatedItems = [...items];
    updatedItems.splice(index, 1);

    // Update the state and local storage with the updated items
    setItems(updatedItems);
    localStorage.setItem('crudItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mt-10">
        <div className="px-[0] bg-[#3A4D1Cff] pb-16 flex justify-around w-screen absolute left-0 right-0 top-0"></div>
        <h2 className="font-black text-5xl mb-14 text-[#3A4D1Cff] mt-5 uppercase">Krijo Raportin</h2>
        <div className="mb-4">
          <label htmlFor="title" className="text-[#3A4D1Cff]">
            Titulli
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded-md p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-[#3A4D1Cff]">
            Pershkrimi
          </label>
          <textarea
            id="description"
            className="w-full border rounded-md p-2"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="text-[#3A4D1Cff]">
            Imazhi
          </label>
          <input
            type="file"
            id="image"
            className="w-full border rounded-md p-2"
            accept="image/*" // Allow only image files to be uploaded
            onChange={(e) => setImageFile(e.target.files[0])} // Store the selected file
          />
        </div>

        <div className="mb-4 overflow-hidden" style={{ width: '610px', height: '300px' }}>
          <label htmlFor="map" className="text-[#3A4D1Cff]">
            Lokacioni
          </label>
          <MapContainer
            center={[mapCoords.lat, mapCoords.lng]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            id="map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[mapCoords.lat, mapCoords.lng]}
              draggable={true}
              eventHandlers={{
                dragend: (e) => {
                  setMapCoords(e.target.getLatLng());
                },
              }}
            >
              <Popup>Your Location</Popup>
            </Marker>
            <UseMapEventsComponent setMapCoords={setMapCoords} />
          </MapContainer>
        </div>
        <button
          className="bg-transparent uppercase border-2 border-white-900 h-10 hover:translate-y-[-5px] shadow text-[#3A4D1Cff] py-1 px-4 rounded-full text-lg font-semibold transition duration-300 my-6 flex mx-auto"
          onClick={handleSave}
        >
          Publiko
        </button>

        <div className="px-[0] bg-[#3A4D1Cff] pb-10 flex justify-around w-screen absolute left-0 right-0 mt-20">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <h2 className="font-black text-4xl mb-5 text-white uppercase col-span-full">Postimet</h2>
            {items.map((item, index) => (
              <div key={index} className="border rounded-md p-7 mb-0 bg-white">
                <h3 className="font-black mb-15 text-[#3A4D1Cff] uppercase col-span-full">{item.title}</h3>
                <p className="text-[#3A4D1Cff] mt-2">{item.description}</p>
                <img src={item.image} alt={item.title} className="mt-5 w-45 h-40 object-cover" />
                <p className="text-[#3A4D1Cff] mt-5">Latitude: {item.mapCoords.lat}</p>
                <p className="text-[#3A4D1Cff]">Longitude: {item.mapCoords.lng}</p>
                <button
                  className=" mt-3 bg-transparent uppercase border-2 border-white-900 h-10 hover:translate-y-[-5px] shadow text-[#3A4D1Cff] py-1 px-4 rounded-full text-lg font-semibold transition duration-300"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
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

export default Crud;
