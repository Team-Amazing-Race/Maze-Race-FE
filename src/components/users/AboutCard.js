import React from 'react';
import PropTypes from 'prop-types';


const AboutCard = ({ aboutProps }) => {


  return (
    <>
      <h3>{aboutProps.name}</h3>
      <img src={aboutProps.img}></img>
      <p>{aboutProps.desc}</p>
    </>
  );

};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired 
};

export default AboutCard;
