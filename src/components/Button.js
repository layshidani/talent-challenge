import React from 'react';

function Button(props) {
    const { onClick, text } = props;

    const buttonStyle = {
      width: '120px',
      fontSize: '20px',
      padding: '20px',
      backgroundColor: '#0071A3',
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