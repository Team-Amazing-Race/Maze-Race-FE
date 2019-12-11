import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerSelection.css';

const PlayerSelection = ({ handleSubmit, colors, symbols }) => {

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [color, setColor] = useState('');
  
  const selectionElements = colors.map((color, i) => (
    <>
      <input type="radio" id={color} value={symbols[i]} name="playerSelections" onClick={({ target }) => { setSymbol(target.value); setColor(target.id);}}/>
      <label key={i} style={{ backgroundColor: color }} htmlFor={color} >
        {symbols[i]}
      </label>
    </>
  ));

  return (
    <form onSubmit={(event) => handleSubmit(event, name, color, symbol)} className={styles.PlayerForm}>
      <input className={styles.PlayerName} type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <div className={styles.ButtonContainer}>
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
