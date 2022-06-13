// OpenLayers読み込み
import { Box, VStack } from '@chakra-ui/react'
import Map from 'ol/Map'
import View from 'ol/View'
import GeoJSON from 'ol/format/GeoJSON'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import { fromLonLat } from 'ol/proj'
import OlSourceOSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import Circle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'
import React, { useEffect, useRef } from 'react'
import 'ol/ol.css'

// 何故かMapPaneが2回マウントされるため、地図が作成されたかを管理するための変数を導入している。解消されたら下記は削除する。
let map: Map | undefined = undefined

// 外部GeoJSONスタイル設定
const styles = {
  Point: new Style({
    image: new Circle({
      radius: 10,
      stroke: new Stroke({
        color: 'rgba(52, 152, 219, 1.0)',
        width: 5,
      }),
      fill: new Fill({
        color: 'rgba(52, 152, 219, 0.4)',
      }),
    }),
  }),
  LineString: new Style({
    stroke: new Stroke({
      color: 'rgba(241, 196, 15, 0.6)',
      width: 5,
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: 'rgba(255, 0, 0, 1.0)',
      width: 2,
    }),
    fill: new Fill({
      color: 'rgba(255, 0, 0, 0.4)',
    }),
  }),
}
const styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()]
}

// 外部GeoJSONソース設定
const vectorSource = new VectorSource({
  url: '/data/stations_with_hierarchical_cluster_4_without_pca.geojson',
  format: new GeoJSON(),
})

// 外部GeoJSONレイヤ設定
const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: styleFunction,
})

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
          // 外部GeoJSONレイヤ指定
          vectorLayer,
        ],
        view: new View({
          center: fromLonLat([139.767, 35.681]),
          zoom: 14,
        }),
      })
    }
  }, [containerRef])

  return (
    <VStack width="full">
      <Box className={'map'} width="full" height="600px" ref={containerRef}></Box>
    </VStack>
  )
}

export default MapPane
