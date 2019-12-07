import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EnterName = ({ handleName }) => {

  const [name, setName] = useState('');

  return (
    <form onSubmit={(event) => handleName(event, name)}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <button>Choose Name</button>
    </form>
  );

};

EnterName.propTypes = {
  handleName: PropTypes.func.isRequired
};

export default EnterName;
