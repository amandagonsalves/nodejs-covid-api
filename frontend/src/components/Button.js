import React from 'react';

export default props => {
  const classes = `btn ${props.className}`;

  return (
    <button className={classes} onClick={props.onClick}>{props.buttonValue}</button>
  );
}