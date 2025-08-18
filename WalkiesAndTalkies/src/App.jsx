import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button';
import LocationCard from './components/LocationCard/LocationCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import activites from './data/activities'
import locations from './data/locations'
import InfoCard from './components/InfoCard/InfoCard';

function App() {
 

  return (
    <>
      <InfoCard>HOLA CHICA</InfoCard>
      <Button>Question</Button>
      <Button>Location
      </Button>
      <LocationCard name={locations[0].name} description={locations[0].description}></LocationCard>
      <ActivityCard question={activites[0].question}></ActivityCard>
    </>
  )
}

export default App
