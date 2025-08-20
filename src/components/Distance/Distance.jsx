import React, {useState} from "react";

const Distance = () => {
    const [walkingTime, setWalkingTime] = useState(null);
    let startLocation = {};


    const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        startLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        // setUserLocation(startLocation);
        
    },
    (error) => {
        console.log("Error:", error.message);
    }
);
} else {
    console.log("Geolocation stöds inte");
}
};

const calculateWalkingTime = () => {
    // if (!userLocation) {
    //         return;
    //     }
        
        const url = `https://graphhopper.com/api/1/route?point=${startLocation.lat},${startLocation.lng}&point=57.708215,11.943207&profile=foot&key=${import.meta.env.VITE_GRAPHHOPPER_API_KEY}`
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const timeInMilliseconds = data.paths[0].time;
            const timeInMinutes = Math.round(timeInMilliseconds / 1000 / 60);
            setWalkingTime(timeInMinutes)
            
        });
    }
    console.log("det tar " + walkingTime + " MINUTER")

return (
<div>
    <button onClick={getUserLocation}>
        Hämta min position
    </button>
    <button onClick={calculateWalkingTime} >
        Beräkna gångtid
    </button>
    {walkingTime && (
        <p>Gångtid: {walkingTime} minuter</p>
    )}
</div>
);

}

export default Distance;
