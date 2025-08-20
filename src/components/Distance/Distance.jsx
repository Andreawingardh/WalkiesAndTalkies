import React, { useEffect, useState } from "react";

const Distance = ({ lat, lng }) => {
  const [endPositionLat, setEndPositionLat] = useState(lat);
  const [endPositionLng, setEndPositionLng] = useState(lng);
  const [walkingTime, setWalkingTime] = useState(null);
  let startLocationLat;
  let startLocationLng;

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const startLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          startLocationLat = startLocation.lat;
          startLocationLng = startLocation.lng;

          // setUserLocation(startLocation);
          
          localStorage.setItem("startLocationLat", startLocationLat)
          localStorage.setItem("startLocationLng", startLocationLng)
          console.log("start" + startLocation.lng);
          console.log("end" + endPositionLng);

          calculateWalkingTime(
            endPositionLat,
            endPositionLng,
            startLocationLat,
            startLocationLng
          );
        },
        (error) => {
          console.log("Error:", error.message);
        }
      );
    } else {
      console.log("Geolocation stöds inte");
    }
    // return startLocation;
  };

  const calculateWalkingTime = (
    endPositionLat,
    endPositionLng,
    startLocationLat,
    startLocationLng
  ) => {
    // if (!userLocation) {
    //         return;
    //     }
    const url = `https://graphhopper.com/api/1/route?point=${startLocationLat},${startLocationLng}&point=${endPositionLat},${endPositionLng}&profile=foot&key=${
      import.meta.env.VITE_GRAPHHOPPER_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const timeInMilliseconds = data.paths[0].time;
        const timeInMinutes = Math.round(timeInMilliseconds / 1000 / 60);
        setWalkingTime(timeInMinutes);
      });
  };
  console.log("det tar " + walkingTime + " MINUTER");

  useEffect(() => {
    getUserLocation();
  }, []);

  return <div>{walkingTime && <p>Gångtid: {walkingTime} minuter</p>}</div>;
};

export default Distance;
