import React, { Component } from "react";
// OpenLayers読み込み
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
// import "../styles/MapPane.css";

class MapPane extends Component {
  map: Map | undefined;
  container: any;

  componentDidMount() {
    // マップ設定
    this.map = new Map({
      target: this.container,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=[APIキー]",
            attributions:
              '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
            attributionsCollapsible: false,
            tileSize: [256, 256],
            minZoom: 0,
            maxZoom: 18,
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([139.767, 35.681]),
        zoom: 14,
      }),
    });
  }

  render() {
    return <div>moge</div>;
    // return <div className={"map"} ref={(e) => (this.container = e)} />;
  }
}

export default MapPane;
