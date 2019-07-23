import React from 'react';

function Button(props) {
    const { onClick, text } = props;

    const buttonStyle = {
      width: '250px',
      fontSize: '30px',
      textTransform: 'uppercase',
      padding: '20px',
      backgroundColor: '#000000',
      color: '#F1F1F1',
      border: 'none',
      borderRadius: '10px'
    };

    const disabledStyle = { ...buttonStyle, backgroundColor: '#ccc' }

    return (
        <button type='button' style={buttonStyle} onClick={onClick}>{text}</button>
    )
  }

  export default Button;