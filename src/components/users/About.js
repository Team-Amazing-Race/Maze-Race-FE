import React from 'react';
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
    <div className={styles.AboutElements}>
      <h2>Meet The Developers</h2>
      <ul>
        {aboutElements}
      </ul>
    </div>
  );
};

export default About;
