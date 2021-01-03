import React from "react";
import DataCards from "../components/DataCards";
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
        <BarChart data={list} id="chartcases" titleText="Cases" seriesName="Cases" valueY="cases" field="cases" />
        <BarChart data={list} id="chartdeaths" titleText="Deaths" seriesName="Deaths" valueY="deaths" field="deaths" />
      </div>

      <div className="container__charts">
        <DataCards totalCases={totalCases} totalDeaths={totalDeaths} />
        <MapChart data={list} />
      </div>
    </div>
  );
}