import React, { useEffect, useRef } from "react";
// OpenLayers読み込み
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

// 何故かMapPaneが2回マウントされるため、地図が作成されたかを管理するための変数を導入している。解消されたら下記は削除する。
let map: Map|undefined = undefined

const MapPane = () => {
  const containerRef = useRef(null)


  useEffect(() => {
    const target = containerRef.current 

    if (target != null && map == undefined) {
      // マップ設定
      map = new Map({
        target: target,
        layers: [
          new TileLayer({
            source: new OlSourceOSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([139.767, 35.681]),
          zoom: 14,
        })
      })
    }
  }, [containerRef])

  return (
    <div
      className={"map"}
      ref={containerRef}
      style={{ minWidth: "800px", minHeight: "800px" }}
    />
  )
}

export default MapPane;
