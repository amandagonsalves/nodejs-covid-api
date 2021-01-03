import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import { getValues } from './getData';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

export default props => {
  const chart = useRef(null);
  const list = props.data;

  useLayoutEffect(() => {
    var x = am4core.create(props.id, am4charts.XYChart);

    x.data = getValues(list, props.field, props.valueY);

    var categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "region";
    categoryAxis.title.text = "Region";


    var valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = props.titleText;

    var series = x.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = props.valueY;
    series.dataFields.categoryX = "region";
    series.name = props.seriesName;

    x.legend = new am4charts.Legend();
    x.cursor = new am4charts.XYCursor();

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    x.paddingRight = 20;
    x.fontSize = 12;
    x.maxWidth = 500;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [list, props.id]);


  return (
    <div id={props.id}></div>
  );
}