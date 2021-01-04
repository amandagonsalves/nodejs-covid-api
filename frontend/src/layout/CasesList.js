import React from "react";
import Card from "../components/Card";
import BarChart from "./BarChart";
import MapChart from "./MapChart";

export default props => {
  const data = props.data;
  const list = data.allCases;
  const totalCases = data.totalCases;
  const totalDeaths = data.totalDeaths;

  return (
    <div className="container">

      <div className="container__charts">
        <Card className="container__cards-card-data" data={totalCases} cardValue="COVID-19 cases" allCases={list} field="cases" />

        <div className="container__map">
          <h1 className="container__charts-title">COVID-19 Affected areas</h1>
          <MapChart data={list} />
        </div>

        <Card className="container__cards-card-data" data={totalDeaths} cardValue="Total deaths" allCases={list} field="deaths" />
      </div>

      <div className="container__charts container__charts-cl">
        <h1 className="container__charts-title container__charts-title-top">Cases and deaths statistics</h1>

        <div className="container__charts">
          <BarChart data={list} id="chartcases" titleText="Cases" seriesName="Cases" valueY="cases" field="cases" color="#fed766" />
          <BarChart data={list} id="chartdeaths" titleText="Deaths" seriesName="Deaths" valueY="deaths" field="deaths" color="#b73021" />
        </div>
      </div>

    </div>
  );
}