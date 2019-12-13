import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerSelection.css';

const PlayerSelection = ({ handleSubmit, colors, symbols }) => {

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [color, setColor] = useState('');
  const [ready, setReady] = useState(false);
  
  const selectionElements = colors.map((color, i) => (
    <>
      <input type="radio" id={color} value={symbols[i]} name="playerSelections" onClick={({ target }) => { setSymbol(target.value); setColor(target.id);}}/>
      <label key={i} style={{ backgroundColor: color }} htmlFor={color} >
        {symbols[i]}
      </label>
    </>
  ));

  return (
    <form onSubmit={(event) => {  setReady(true); handleSubmit(event, name, color, symbol, true); }} className={styles.PlayerForm}>
      <p>Enter Name: </p>
      <input className={styles.PlayerName} type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <p>Choose Color: </p>
      <div className={styles.ButtonContainer}>
        {selectionElements}
      </div>
      <p>Send Url For Players to Join and then press start: </p>
      <button disabled={ready}>Start</button>
    </form>
  );

};

PlayerSelection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
  symbols: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default PlayerSelection;
