import React, { Component } from "react";
// OpenLayers読み込み
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

class MapPane extends Component {
  map: any;
  container: any;

  componentDidMount() {
    // マップ設定
    this.map = new Map({
      target: this.container,
      layers: [
        new TileLayer({
          source: new OlSourceOSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([139.767, 35.681]),
        zoom: 14,
      }),
    });
  }

  render() {
    return (
      <div
        className={"map"}
        ref={(e) => (this.container = e)}
        style={{ minWidth: "800px", minHeight: "800px" }}
      />
    );
  }
}

export default MapPane;
