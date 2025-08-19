import './App.css'
import LocationCard from './components/LocationCard/LocationCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import activites from './data/activities'
import locations from './data/locations'
import MapsButton from './components/maps_button/MapsButton';
import Button from './components/Button/Button';


function App() {
 

  return (
    <>
      {/* <Button>Question</Button>
      <Button>Location</Button> */}
      <LocationCard></LocationCard>
      <ActivityCard></ActivityCard>
      <MapsButton />
      </>
  )
}

export default App;
