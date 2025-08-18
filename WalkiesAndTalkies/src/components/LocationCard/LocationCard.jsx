import React from 'react'
import styles from './LocationCard.module.css'

function LocationCard({name, description, coordinates, image, categories, address, ...props}) {


    return (
        <div className={styles.normal} {...props}>
            <h1>Name: {name}</h1>
            <p>Description: {description}</p>
            <img src="" />
            <p>Coordinates: {coordinates}</p>
            <p>Categories: { categories }</p>
        </div>
    )
}

export default LocationCard