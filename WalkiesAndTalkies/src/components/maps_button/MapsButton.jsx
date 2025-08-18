import React, {useState} from 'react';
function MapsButton({origin = "Lindholmen", destination = "Gothenburg Central Station", children}) { 
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`;
    const handleClick = () => {
        window.open(mapsUrl, '_blank');
    }
    return (
        <button 
        onClick={handleClick}
        >
            Show map
        </button>
    )
}

export default MapsButton;
