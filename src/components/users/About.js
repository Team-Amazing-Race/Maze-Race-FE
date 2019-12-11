import React from 'react';
//import styles from './styles/About.css';
import AboutCard from './AboutCard';
import aboutProps from './AboutProps';
import styles from '../styles/About.css';

const About = () => {
  const aboutElements = aboutProps.map(about => {    
    return (
      <li key={about.name + about.img + about.desc}>
        <AboutCard {...about}/>
      </li>
    );
  });

  return (
    <>
      <h2>Meet The Developers</h2>
      <ul className={styles.AboutElements}>
        {aboutElements}
      </ul>
    </>
  );
};

export default About;
