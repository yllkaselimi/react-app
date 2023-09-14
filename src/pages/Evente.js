import React, { useState } from 'react';
import Modal from '../components/Modal';

const Evente = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
  
  const events = [ 
    {
      id: 1,
      title: 'Te pastrojme Parkun e Germise',
      location: 'Germia Park, Prishtine',
      date: 'Sat Sep 16, 13:00',
      description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
    },
    {
      id: 2,
      title: 'Mbjellja e Pemeve ne TokBahqe',
      location: 'TokBahqe, Prishtine',
      date: 'Sun Sep 17, 12:00',
      description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
    },
    {
        id: 3,
        title: 'Te Pastrojme Parkun e Qytetit',
        location: 'Parku i Qytetit, Prishtine',
        date: 'Mon Sep 18, 13:00',
        description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
      },
      {
        id: 4,
        title: 'Mbjellja e Pemeve ne TokBahqe',
        location: 'Tokbahqe',
        date: 'Tue Sep 19, 12:30',
        description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
      },
      {
        id: 5,
        title: 'Mbjellja e Pemeve ne Bregun e Diellit',
        location: 'Bregu i Diellit',
        date: 'Wed Sep 20, 14:00',
        description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
      },
      {
        id: 6,
        title: 'Te Pastrojme lagjen Velania',
        location: 'Velani',
        date: 'Thur Sep 21',
        description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
      },
      {
        id: 7,
        title: 'Te mbjellim peme ne Tasligje',
        location: 'Tasligje',
        date: 'Fri Sep 22',
        description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
      },
      {
        id: 8,
        title: 'Te Pastrojme Sheshin Nena Tereze',
        location: 'Sheshi Nena Tereze',
        date: 'Sat Sep 23',
        description: 'Le të bashkohemi së bashku për të pastroruar dhe ruajtur mjedisin në Kosovë. Kjo është detyra jonë ndaj vetes, shëndetit, natyrës, dhe të ardhmes së vendit tonë. Te ndihmojmë në mbrojtjen dhe ruajtjen e natyrës tone. Ndërveprimi ynë me mjedisin ndikon në nivel global. Duke u bashkuar me përpjekjet e komunitetit ndërkombëtar për të pastrojmë planetin tonë, ne kontribuojmë në mbrojtjen e klimës globale.',
      },
    // Add more events as needed
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };
  return (
    <div>
     <div className="px-0 bg-[#3A4D1Cff] pb-16 flex justify-around w-screen absolute left-0 right-0 top-0"></div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,128L26.7,122.7C53.3,117,107,107,160,128C213.3,149,267,203,320,224C373.3,245,427,235,480,213.3C533.3,192,587,160,640,144C693.3,128,747,128,800,149.3C853.3,171,907,213,960,213.3C1013.3,213,1067,171,1120,165.3C1173.3,160,1227,192,1280,202.7C1333.3,213,1387,203,1413,197.3L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
    <h2 className='font-black text-4xl mb-7 text-[#3A4D1Cff] uppercase flex justify-center items-center relative '>Evente</h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">  
        {events.map((event) => (
            <div
            key={event.id}
            className="w-80 max-w-md m-4 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(event)}
            >
            <div className="p-4 group">
                <h3 className="font-black text-2xl mb-8 text-[#3A4D1Cff] mt-1">{event.title}</h3>
                <p className="text-gray-600">Location: {event.location}</p>
                <p className="text-gray-600 mb-5">Date: {event.date}</p>

            <div className="flex items-center space-x- ">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              </div>
          </div>
        </div>
      ))}
  
      {/* Modal */}
      <Modal isOpen={selectedEvent !== null} closeModal={closeModal} event={selectedEvent} />
       </div>
       
    
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E39C9C" fill-opacity="1" d="M0,64L26.7,85.3C53.3,107,107,149,160,144C213.3,139,267,85,320,80C373.3,75,427,117,480,149.3C533.3,181,587,203,640,208C693.3,213,747,203,800,181.3C853.3,160,907,128,960,122.7C1013.3,117,1067,139,1120,144C1173.3,149,1227,139,1280,128C1333.3,117,1387,107,1413,101.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    <div className="h-[55vh] px-[0] bg-[#E39C9C] pb-10 flex items-center relative overflow-hidden flex-col">

    <h1 class="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mt-20 lg:text-6xl dark:text-white">Behu pjese e komunitetit <span class="underline underline-offset-3 decoration-8 decoration-white dark:decoration-white"> #pastroKosoven</span></h1>

    
    <p class="mb-3 text-lg text-white md:text-xl dark:text-white-10">Hedhja e mbeturinave në natyrë, shkaterron ekosistemet dhe habitatet e shumë llojeve të bimëve dhe shtazëve.</p>
    <p class="text-white dark:text-white text-center">Hedhja e mbeturinave toksike, mund të ndikojë negativisht në shëndetin e qytetarëve. Ndërhyrjet mjekësore të lidhura me ndotjen dhe kontaminimin e mjedisit shkaktojnë probleme serioze shëndetësore tek ne.</p>



    

    </div>
    
    </div>
  );
  
};

export default Evente;
