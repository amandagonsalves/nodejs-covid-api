import React from "react";
import Table from "../layout/Table";

export default props => {
  const cardClassName = `container__cards-card ${props.className}`
  return (
    <div className={cardClassName}>
      <p>{props.data}</p>
      <small>{props.cardValue}</small>
      <Table data={props.allCases} name={props.name} field={props.field} />
    </div>
  )
}