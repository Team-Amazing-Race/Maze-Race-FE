import React from 'react';
import PropTypes from 'prop-types';
//import styles from './styles/About.css';
import AboutCard from './AboutCard';
import aboutProps from './AboutProps.json';
console.log(aboutProps);

const About = ({ aboutProps }) => {
  const aboutDevs = aboutProps.map(aboutProps => {

    return (
      <li key={aboutProps.name + aboutProps.img + aboutProps.desc}>
        <AboutCard {...aboutProps}/>
      </li>
    );
  });

  return (
    <>
      <h2>Meet The Developers</h2>
      <ul>
        {aboutDevs}
      </ul>
    </>
  );
};

About.propTypes = {
  aboutProps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }))
};

export default About;
