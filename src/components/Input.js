import React from 'react';

function Input(props) {
  const inputStyle = {
    fontSize: '0.7em',
    width: '80%',
    padding: '10px',
    margin: '5px 0px',
    border: '1px solid silver',
    borderRadius: '10px'
}

  return (
    <input style={inputStyle} type={props.type} placeholder={props.text} onChange={props.onChange} value={props.value} />
  );
}

export default Input;
