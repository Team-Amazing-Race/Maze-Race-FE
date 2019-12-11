import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/AboutCard.css';


const AboutCard = ({ name, image, desc }) => {


  return (
    <div className={styles.Devs}>
      <h3>{name}</h3>
      <img src={image}></img>
      <p>{desc}</p>
    </div>
  );

};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired 
};

export default AboutCard;
