import React, { useState } from 'react';
import PropTypes from 'prop-types';

const JoinRoomForm = ({ handleJoin }) => {

  const [name, setName] = useState('');

  return (
    <form onSubmit={(event) => handleJoin(event, name)}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <button>Start</button>
    </form>
  );

};

JoinRoomForm.propTypes = {
  handleJoin: PropTypes.func.isRequired
};

export default JoinRoomForm;
