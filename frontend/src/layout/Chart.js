import React from "react";
import { Line } from "react-chartjs-2";

export default props => {
  return (
    <div className="chart">
      <Line
        data={{
          labels: props.countries,
          datasets: [{
            label: 'Casos por região',
            data: props.cases,
            backgroundColor: [
              'rgba(0,0,0,0)'
            ],
            borderColor: [
              '#fed766',
            ],
            borderWidth: 3
          }]
        }}
      />
    </div>
  )
}