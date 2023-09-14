// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddContact = () => {
    if (formData.email && formData.message) {
      const newContact = {
        id: Date.now(),
        email: formData.email,
        message: formData.message,
      };

      const updatedContacts = [...contacts, newContact];
      setContacts(updatedContacts);
      setFormData({ email: '', message: '' });
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    }
  };

  return (
    <div>
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg border-[#3A4D1C] border-2">
    <h1 className='font-black text-3xl mb-7 text-[#3A4D1C] uppercase flex items-center relative '>Contact Us</h1>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button
        onClick={handleAddContact}
        className="bg-[#E39C9C] text-white px-4 py-2 rounded-md hover:bg-[#EABABA] focus:outline-none focus:bg-[EABABA"
      >
        Dergo Mesazhin
      </button>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,224L26.7,229.3C53.3,235,107,245,160,218.7C213.3,192,267,128,320,101.3C373.3,75,427,85,480,117.3C533.3,149,587,203,640,229.3C693.3,256,747,256,800,240C853.3,224,907,192,960,197.3C1013.3,203,1067,245,1120,261.3C1173.3,277,1227,267,1280,229.3C1333.3,192,1387,128,1413,96L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    <div className="h-[55vh] px-[0] bg-[#3A4D1Cff] pb-10 flex items-center relative overflow-hidden flex-col">

    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mt-20 lg:text-6xl dark:text-white">Behu pjese e komunitetit <span class="underline underline-offset-3 decoration-8 decoration-white dark:decoration-white"> #pastroKosoven</span></h1>
    
    <p class="mb-3 text-lg text-gray-100 md:text-xl dark:text-gray-100 mt-10">Hedhja e mbeturinave në natyrë, shkaterron ekosistemet dhe habitatet e shumë llojeve të bimëve dhe shtazëve.</p>
    <p class="text-gray-100 dark:text-gray-100 text-center">Hedhja e mbeturinave toksike, mund të ndikojë negativisht në shëndetin e qytetarëve. Ndërhyrjet mjekësore të lidhura me ndotjen dhe kontaminimin e mjedisit shkaktojnë probleme serioze shëndetësore tek ne.</p>

    </div>
    </div>
  );
};

export default ContactForm;
