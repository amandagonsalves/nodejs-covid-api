import React from "react";

export default props => {
  const cardClassName = `cards__card ${props.className}`
  return (
    <div className={cardClassName}>
      <p>{props.data}</p>
      <small>{props.cardValue}</small>
    </div>
  )
}