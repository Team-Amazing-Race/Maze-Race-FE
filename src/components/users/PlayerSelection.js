import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerSelection.css'

const PlayerSelection = ({ handleSubmit, colors, symbols }) => {

  const [name, setName] = useState('');

  const selectionElements = colors.map((color, i) => (
    <label key={i} style={{ backgroundColor: color }} className={styles.Label}> 
      {symbols[i]}
      <input type="radio" id="selection"  value={color + symbols[i]} className={styles.Radio}/>
    </label>
  ));

  return (
    <form onSubmit={(event) => handleSubmit(event, name)}>
      <input className={styles.PlayerName} type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <div>
        {selectionElements}
      </div>
      <button>Start</button>
    </form>
  );

};

PlayerSelection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
  symbols: PropTypes.arrayOf(PropTypes.string.isRequired) 
};

export default PlayerSelection;
