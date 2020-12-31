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
        <BarChart data={list} label="Cases" field="cases" />
        <BarChart data={list} label="Deaths" field="deaths" />
      </div>

      <div>
        <DataCards totalCases={totalCases} totalDeaths={totalDeaths} />
      </div>
    </div>
  );
}