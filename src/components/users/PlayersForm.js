import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerForm.css';

const PlayersForm = ({ handleSubmit, type }) => {

  const [players, setPlayers] = useState('');

  return (
    <form className={styles.PlayersForm} onSubmit={(event) => handleSubmit(event, players)}>
      <input type="number" name="quantity" min="1" max="8" value={players} onChange={({ target }) => setPlayers(target.value)} />
      <br></br>
      <button>Start</button>
    </form>
  );

};

PlayersForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default PlayersForm;
