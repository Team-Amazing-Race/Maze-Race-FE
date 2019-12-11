import React from 'react';
import PropTypes from 'prop-types';


const AboutCard = ({ name, image, desc }) => {


  return (
    <div className={StyleSheet.Devs}>
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
