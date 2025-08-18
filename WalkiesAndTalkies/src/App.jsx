import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/Button';
import LocationCard from './components/LocationCard/LocationCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import activites from './data/activities'
import locations from './data/locations'

function App() {
 

  return (
    <>
    
      <Button>Question</Button>
      <Button>Location
      </Button>
      <LocationCard name={locations[0].name} description={locations[0].description}></LocationCard>
      <ActivityCard question={activites[0].question}></ActivityCard>
    </>
  )
}

export default App
