import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';

const Modal = ({ children }) => {


  return (
    <div className={styles.Modal} >
      {children}
    </div>
   
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
