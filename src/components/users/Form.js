import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => {

  const [name, setName] = useState('');

  return (
    <form onSubmit={(event) => handleSubmit(event, name)}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <button>Start</button>
    </form>
  );

};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
