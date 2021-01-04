import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_material);

export default props => {
  const chart = useRef(null);
  const data = props.data;
  const list = data.cases;

  useLayoutEffect(() => {
    var x = am4core.create(props.id, am4charts.XYChart);

    const allCases = list.map(item => {
      const cases = item.body.newCases;
      const days = item.body.reportDate;

      return {
        cases,
        days
      }
    });

    console.log(allCases)

    x.data = allCases;

    var categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "days";
    categoryAxis.title.text = "Days";

    var valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Cases";

    var series = x.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "cases";
    series.dataFields.categoryX = "days";
    series.name = "Cases per day";
    series.stroke = am4core.color("#FFF");

    series.fill = am4core.color("red");
    series.stroke = am4core.color("red");
    series.strokeWidth = 2; 

    x.legend = new am4charts.Legend();
    x.cursor = new am4charts.XYCursor();

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;
    x.scrollbarX.thumb.background.fill = am4core.color("#FFF");
    scrollbarX.scrollbarChart.seriesContainer.hide();
    x.scrollbarX.minHeight = 10;
    x.scrollbarX.marginTop = 25;
    x.scrollbarX.marginBottom = 25;

    let scrollAxis = x.scrollbarX.scrollbarChart.xAxes.getIndex(0);
    scrollAxis.renderer.labels.template.disabled = true;
    scrollAxis.renderer.grid.template.disabled = true;

    x.paddingRight = 50;
    x.fontSize = 12;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [list, props.id]);


  return (
    <div id={props.id}></div>
  );
}