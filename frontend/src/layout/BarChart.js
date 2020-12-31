import React from "react";
import { Bar } from "react-chartjs-2";
const { getRegions, getTotalPerRegion } = require("./getData");

export default props => {
  const data = props.data;

  return (
    <div className="container__charts-chart">
      <Bar
        data={{
          labels: getRegions(data),
          datasets: [{
            label: props.label,
            data: getTotalPerRegion(data, props.field),
            backgroundColor: [
              '#fe4a49',
              '#adc865',
              '#89d5c9',
              '#fac172',
              '#ff8357',
              '#e25b45'
            ],
            borderColor: [
              '#fe4a49',
              '#adc865',
              '#89d5c9',
              '#fac172',
              '#ff8357',
              '#e25b45'
            ],
            borderWidth: 3,
          }]
        }}
      />
    </div>
  );
}