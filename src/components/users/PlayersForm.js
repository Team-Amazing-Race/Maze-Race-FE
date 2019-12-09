import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => {

  const [players, setPlayers] = useState('');

  return (
    <form onSubmit={(event) => handleSubmit(event, players)}>
      <input type="number" value={players} onChange={({ target }) => setPlayers(target.value)} />
      <button>Start</button>
    </form>
  );

};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
