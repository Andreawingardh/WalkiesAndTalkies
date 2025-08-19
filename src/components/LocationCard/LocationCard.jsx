import React from "react";
import styles from "./LocationCard.module.css";
import MapsButton from "../maps_button/MapsButton";
import Button from "../Button/Button";

function LocationCard({
  name,
  description,
  coordinates,
  image,
  categories,
  address,
  ...props
}) {
  return (
      <div className={styles.normal} {...props}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.background} width="402" height="493" viewBox="0 0 402 493" fill="none">
  <path d="M11.3333 11.9098C171.833 97.9098 319.834 -39.5903 413.334 11.9098C497.933 58.5073 429.441 614.319 415.634 719.718C414.337 729.616 405.902 736.91 395.919 736.91H27.7632C18.2144 736.91 10.0923 730.608 8.31096 721.227C-13.0241 608.871 -135.89 -66.9761 11.3333 11.9098Z" fill="#E9E9E8"/>
</svg>
      <h1>{name}</h1>
      <img src="../src/assets/images/Slottsberget.png" />
      <div className={styles.descriptionWrapper}>
        <p>{description}</p>
        <p className={styles.modalLink}>Läs mer</p>
      </div>
      <div className={styles.buttonDisplay}>
        <Button>Börja om</Button>
        <MapsButton />
      </div>
    </div>
  );
}

export default LocationCard;
