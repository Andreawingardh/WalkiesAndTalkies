import { useEffect, useState } from "react";

// Exportable function to get user's current location
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,  // Use GPS instead of network
        timeout: 10000,           // Wait up to 10 seconds
        maximumAge: 0             // Don't use cached location
      };
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // Store in localStorage if needed
          localStorage.setItem("startLocationLat", location.lat);
          localStorage.setItem("startLocationLng", location.lng);
          resolve(location);
        },
        (error) => {
          reject(error);
        },
        options  // Pass the options as the third parameter
      );
    } else {
      const error = new Error("Geolocation stöds inte");
      reject(error);
    }
  });
};

// Exportable function to calculate walking time
export const calculateWalkingTime = async (
  startLat,
  startLng,
  endLat,
  endLng
) => {
  const url = `https://graphhopper.com/api/1/route?point=${startLat},${startLng}&point=${endLat},${endLng}&profile=foot&key=${
    import.meta.env.VITE_GRAPHHOPPER_API_KEY
  }`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const timeInMilliseconds = data.paths[0].time;
    const timeInMinutes = Math.round(timeInMilliseconds / 1000 / 60);
    return timeInMinutes;
  } catch (error) {
    throw error;
  }
};

// Main Distance component
const Distance = ({ lat, lng }) => {
  const [walkingTime, setWalkingTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateAndSetWalkingTime = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get stored location (should be ready from App.jsx)
      const startLat = localStorage.getItem("startLocationLat");
      const startLng = localStorage.getItem("startLocationLng");
      
      if (!startLat || !startLng) {
        throw new Error("Platsdata inte tillgänglig");
      }

      // Calculate walking time (instant since location is ready!)
      const time = await calculateWalkingTime(
        parseFloat(startLat),
        parseFloat(startLng),
        lat,
        lng
      );
      
      setWalkingTime(time);
    } catch (err) {
      setError("Gick inte att räkna ut promenadtid");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateAndSetWalkingTime();
  }, [lat, lng]);

  if (loading) {
    return <div>Räknar ut promenadtid...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {walkingTime && (
        <p>
          Cirka <strong>{walkingTime} min</strong> promenad från dig
        </p>
      )}
    </div>
  );
};

export default Distance;