import React from 'react'
import CardsSection from '../components/CardsSection'
import HeroBanner from '../components/HeroBanner'
import MapSection from '../components/MapSection'
import ContactForm from '../components/ContactForm'

function Home() {
  return (
    <div>
      <HeroBanner />
      <MapSection />
      <CardsSection />
      <ContactForm />
    </div>
  )
}

export default Home