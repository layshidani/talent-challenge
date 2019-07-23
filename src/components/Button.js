import React from 'react';

function Button(props) {
    const { onClick, text } = props;

    const buttonStyle = {
      fontSize: '30px',
      textTransform: 'uppercase',
      backgroundColor: '#00B7B2',
      color: '#F1F1F1',
      border: 'none',
      borderRadius: '10px'
    };

    const disabledStyle = { ...buttonStyle, backgroundColor: '#ccc' }

    return (
        props.disabled ?
        <button style={disabledStyle} onClick={onClick} disabled='disabled'>{text}</button> :
        <button style={buttonStyle} onClick={onClick}>{text}</button>
    )
  }

  export default Button;