import React from 'react';

function Input(props) {
  const inputStyle = {
    fontSize: '30px',
    width: '100%',
    margin: '15px 0px',
    padding: '20px',
    border: '1px solid silver',
    borderRadius: '10px'
  }

  return (
    <input style={inputStyle} type={props.type} placeholder={props.text} onChange={props.onChange} value={props.value} />
  );
}

export default Input;