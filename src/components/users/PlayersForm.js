import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PlayersForm = ({ handleSubmit, type }) => {

  const [players, setPlayers] = useState('');

  return (
    <form onSubmit={(event) => handleSubmit(event, players)}>
      <input type={type} value={players} onChange={({ target }) => setPlayers(target.value)} />
      <button>Start</button>
    </form>
  );

};

PlayersForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default PlayersForm;
