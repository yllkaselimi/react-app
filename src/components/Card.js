import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[200px]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;