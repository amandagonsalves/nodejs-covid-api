import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import React, { useRef, useLayoutEffect } from 'react';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function App(props) {
  const chart = useRef(null);
  const list = props.data;

  useLayoutEffect(() => {
    var chart = am4core.create("mapchart", am4maps.MapChart);

    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();

    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    polygonSeries.useGeodata = true;

    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {cases}";
    polygonTemplate.fill = am4core.color("#fe4a49");

    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#b73021");

    const data = chart.geodata.features;

    const mapName = {
      'United States': 'United States of America',
      'Russia': 'Russian Federation',
    };

    const dataCountries = data.map(item => {
      const country = item.properties.name;
      const countryName = mapName[country] || country;
      const id = item.properties.id;
      
      for (let i = 0; i < data.length; i++) {
        const {
          name,
          cases,
        } = list[i] ? list[i].body : {};

        if (!name) {
          break;
        }
     
        if (name == countryName) {
          return {
            id,
            name,
            cases,
          };
        }
      }

      return {
        id,
        name: countryName,
        cases: 0,
      };
    });

    polygonSeries.data = dataCountries;

    chart.current = chart;

    return () => {
      chart.dispose();
    };
  }, [list]);

  return (
    <div id="mapchart"></div>
  );
}
export default App;





