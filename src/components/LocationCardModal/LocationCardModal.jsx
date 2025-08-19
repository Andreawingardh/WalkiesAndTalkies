import React from 'react';
import styles from './LocationCardModal.module.css'

const LocationCardModal = ({ isOpen, onClose, children}) => {
  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}> 
        {children}
      </div>
    </div>
  );
};

export default LocationCardModal;