import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, closeModal, event }) => {
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    if (event) {
      // Check if the "isJoined" state is saved in local storage for this event when the component mounts
      const storedIsJoined = localStorage.getItem(`event_${event.id}_isJoined`);
      if (storedIsJoined !== null) {
        setIsJoined(JSON.parse(storedIsJoined));
      }
    }
  }, [event]);

  useEffect(() => {
    if (event) {
      // Save the "isJoined" state to local storage for this event whenever it changes
      localStorage.setItem(`event_${event.id}_isJoined`, JSON.stringify(isJoined));
    }
  }, [event, isJoined]);

  if (!isOpen || !event) {
    // Handle the case where the modal is not open or the event is not provided
    return null;
  }

  const toggleJoin = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-content bg-white p-4 max-w-4xl rounded-lg shadow-xl relative">

        <h3 className="font-black text-2xl mb-8 text-[#3A4D1Cff] mt-0">{event.title}</h3>
        <p className="text-gray-600 mb-2">Location: {event.location}</p>
        <p className="text-gray-600 mb-5">Date: {event.date}</p>
        <p className="text-gray-600">{event.description}</p>
  
        <button
          className={`mt-4 px-4 py-2 rounded-lg ${isJoined ? 'bg-red-500 text-white uppercase border-2 border-white-900 h-12 hover:translate-y-[-5px] shadow text-[#3A4D1Cff] py-1 px-4 rounded-full text-lg font-semibold transition duration-300' : 'bg-[#3A4D1Cff] text-white uppercase border-2 border-white-900 h-12 hover:translate-y-[-5px] shadow text-[#3A4D1Cff] py-1 px-4 rounded-full text-lg font-semibold transition duration-300'}`}
          onClick={toggleJoin}
        >
          {isJoined ? 'Unjoin' : 'Join'}
        </button>
  
        <button
          className="absolute bottom-0 right-0 mb-4 mr-4 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
  
  
};

export default Modal;