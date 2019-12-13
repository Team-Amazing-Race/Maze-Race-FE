import React from 'react';
import PropTypes from 'prop-types';

const AboutCard = ({ name, image, desc }) => {

  return (
    <>
      <h3>{name}</h3>
      <img src={image}></img>
      <p>{desc}</p>
    </>
  );
};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired 
};

export default AboutCard;
