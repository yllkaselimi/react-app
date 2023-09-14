import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("./images/bg.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center container justify-center w-full text-center text-white">
            <h1 className="text-8xl font-black uppercase mb-4 drop-shadow-2xl">Pastro Kosoven</h1>
            <p className="text-lg mb-8 font-thin max-w-[500px] drop-shadow-2xl">
              Për ta ruajtur bukurinë dhe mjedisin tonë, është detyrë e çdo qytetari të marrë përgjegjësinë e tyre. 
              </p>
          <button
            className="bg-transparent uppercase border-2 border-white-900 h-10 hover:translate-y-[-5px] shadow text-white py-1 px-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Raporto Tani
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;