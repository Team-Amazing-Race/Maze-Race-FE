import React from 'react';
import AboutCard from './AboutCard';
import aboutProps from './AboutProps';
import styles from '../styles/About.css';

const About = () => {
  const aboutElements = aboutProps.map(about => {    
    return (
      <div key={about.name + about.img + about.desc}>
        <AboutCard {...about}/>
      </div>
    );
  });

  return (
    <div className={styles.AboutElements}>
      <h2>Meet The Developers</h2>
      <div className={styles.aboutContainer}>
        {aboutElements}
      </div>
    </div>
  );
};

export default About;
