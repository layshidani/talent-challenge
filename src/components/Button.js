import React from 'react';
import { transform } from '@babel/core';

function Button(props) {
    const { onClick, text } = props;

    const buttonStyle = {
      textAlign:'center',
      fontSize: '0.7em',
      padding: '10px 20px',
      backgroundColor: '#0071A3',
      color: '#F1F1F1',
      border: 'none',
      borderRadius: '10px',
      textTransform:'uppercase',
      marginTop: '10px'
    };

    const disabledStyle = { ...buttonStyle, backgroundColor: '#ccc' }

    return (
        <button type='button' style={buttonStyle} onClick={onClick}>{text}</button>
    )
  }

  export default Button;