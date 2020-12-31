import React from "react";

export default props => {
  const cardClassName = `container__cards-card ${props.className}`
  return (
    <div className={cardClassName}>
      <p>{props.data}</p>
      <small>{props.cardValue}</small>
    </div>
  )
}