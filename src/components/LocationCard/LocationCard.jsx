import React from "react";
import styles from "./LocationCard.module.css";
import MapsButton from "../maps_button/MapsButton";
import Button from "../Button/Button";
import LocationCardModal from "../LocationCardModal/LocationCardModal";
import { useState } from "react";
import Distance from "../Distance/Distance";

function LocationCard({ location, resetClick, ...props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={styles.normal} {...props}>
        <div className={styles.locationContent}>
          <h1>{location.name}</h1>

          <img src="../src/assets/images/Slottsberget.png" />
          <p>   <Distance
            lat={location.coordinates.lat}
            lng={location.coordinates.lng}
          ></Distance></p>
          <div className={styles.descriptionWrapper}>
            <div className={styles.descriptionBox}>
              <div>{location.description}</div>
              <div className={styles.fadeOverlay}></div>
            </div>
          </div>
          <button className={styles.modalLink} onClick={openModal}>
            Läs mer
          </button>
          <div className={styles.buttonDisplay}>
            <Button onClick={resetClick}>Börja om</Button>
            <MapsButton
              origin={
                localStorage.getItem("startLocationLat") +
                "," +
                localStorage.getItem("startLocationLng")
              }
              destination={
                location.coordinates.lat + "," + location.coordinates.lng
              }
            />
          </div>
        </div>
      </div>
      <LocationCardModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{location.name}</h2>
        <p>{location.description}</p>
        <Button onClick={closeModal} className={styles.modalButtonClose}>
          Stäng
        </Button>
      </LocationCardModal>
    </>
  );
}

export default LocationCard;
