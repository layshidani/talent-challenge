import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Input(props){ 
  return (
    <InputGroup className="mb-3">
    <FormControl 
      placeholder={props.text}     
    />
       {/* <InputGroup.Append>
      <InputGroup.Text id="basic-addon2"></InputGroup.Text>
    </InputGroup.Append> */}
  </InputGroup>
    // <input style={inputStyle} type={props.type} placeholder={props.text} onChange={props.onChange} value={props.value} />
  );
}

export default Input;