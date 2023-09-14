import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardsSection = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Load data from local storage on component mount
        const savedItems = JSON.parse(localStorage.getItem('crudItems')) || [];
        setItems(savedItems);
    }, []);

    return (
        <div>
            <svg className='max-w-[100vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3A4D1C" fill-opacity="1" d="M0,192L20,213.3C40,235,80,277,120,245.3C160,213,200,107,240,101.3C280,96,320,192,360,234.7C400,277,440,267,480,250.7C520,235,560,213,600,186.7C640,160,680,128,720,101.3C760,75,800,53,840,74.7C880,96,920,160,960,197.3C1000,235,1040,245,1080,213.3C1120,181,1160,107,1200,90.7C1240,75,1280,117,1320,122.7C1360,128,1400,96,1420,80L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
            </svg>
            <div className="h-[80vh] px-[0] bg-[#3A4D1Cff] pb-10 flex justify-around items-center relative overflow-hidden flex-col">
                <h2 className='font-black text-5xl text-white uppercase'>Raportet</h2>
                <div className='overflow-x-scroll flex mx-auto gap-4 pb-4 container'>
                    {items.map((item, index) => (
                        <Card
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,288L16,256C32,224,64,160,96,138.7C128,117,160,139,192,176C224,213,256,267,288,250.7C320,235,352,149,384,128C416,107,448,149,480,149.3C512,149,544,107,576,74.7C608,43,640,21,672,26.7C704,32,736,64,768,90.7C800,117,832,139,864,149.3C896,160,928,160,960,144C992,128,1024,96,1056,96C1088,96,1120,128,1152,133.3C1184,139,1216,117,1248,144C1280,171,1312,245,1344,250.7C1376,256,1408,192,1424,160L1440,128L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
        </div>

    );
};

export default CardsSection;