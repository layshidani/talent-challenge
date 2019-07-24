import React from 'react';
import './ButtonLogin.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginButton(props) {
  return (
    <button className={props.className} onClick={props.onClick} id={props.id}>
      <FontAwesomeIcon icon={props.iconName} /> {props.text} {props.price}
    </button>
  );

}

export default LoginButton;
