import React from "react";
import Card from "./Card";

export default props => {
  return (
    <div className="cards">
      <Card className="cards__card-data" data={props.totalCases} cardValue="COVID-19 cases" />
      <Card className="cards__card-data" data={props.totalDeaths} cardValue="Total deaths" />
      <Card className="cards__card-data" data={props.totalCases} cardValue="COVID-19 cases" />
      <Card className="cards__card-data" data={props.totalDeaths} cardValue="Total deaths" />
    </div>
  )
}