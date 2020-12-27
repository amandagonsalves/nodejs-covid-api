import React from "react";
import DataCards from "../components/DataCards";

export default props => {
  const data = props.data;
  const list = data.allCases;
  const totalCases = data.totalCases;
  const totalDeaths = data.totalDeaths;

  return (
    <div>
      <DataCards totalCases={totalCases} totalDeaths={totalDeaths} />
    </div>
  )
}