import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const dataMarkers = [
  { lat: 3.047268, long: 101.651001 },
  { lat: 4.072494, long: 101.975098 },
  { lat: 5.200365, long: 100.898438 },
  { lat: 5.391805, long: 101.618042 },
  { lat: 4.36832, long: 101.184082 }
]

@Component({
  selector: 'app-lake-viewer',
  templateUrl: './lake-viewer.component.html',
  styleUrls: ['./lake-viewer.component.scss']
})
export class LakeViewerComponent implements OnInit {

  leafletOptions = {
    layers: [
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          subdomains: 'abcd',
          maxZoom: 19
        }
      )
    ],
    zoom: 7,
    center: L.latLng(4.2105, 101.9758)
  };

  markerLayer: L.Layer[] = []

  constructor() { }

  ngOnInit() {
    this.loadMarkers()
    this.initChart()
  }

  loadMarkers() {
    dataMarkers.forEach(
      (marker) => {
        this.markerLayer.push(
          L.marker(
            [marker.lat, marker.long],
            {
              icon: L.icon({
                iconSize: [35, 35],
                iconUrl: 'assets/img/marker/droplet.svg'
              })
            }
          )
        )
      }
    )
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    // Data for both series
    let data = [{
      "year": "2015",
      "income": 235,
      "expenses": 211
    }, {
      "year": "2016",
      "income": 262,
      "expenses": 305
    }, {
      "year": "2017",
      "income": 301,
      "expenses": 349
    }, {
      "year": "2018",
      "income": 295,
      "expenses": 311
    }, {
      "year": "2019",
      "income": 306,
      "expenses": 282,
      "lineDash": "5,5",
    }, {
      "year": "2020",
      "income": 341,
      "expenses": 329,
      "strokeWidth": 1,
      "columnDash": "5,5",
      "fillOpacity": 0.2,
      "additional": "(projection)"
    }];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 30;

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Flora";
    columnSeries.dataFields.valueY = "income";
    columnSeries.dataFields.categoryX = "year";

    columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Fauna";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "year";

    lineSeries.stroke = am4core.color("#fdd400");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;

    chart.data = data;

  }

}
