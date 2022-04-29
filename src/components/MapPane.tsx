// OpenLayers読み込み
import { Box, VStack } from '@chakra-ui/react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat } from 'ol/proj'
import OlSourceOSM from 'ol/source/OSM'
import React, { useEffect, useRef } from 'react'
import 'ol/ol.css'

// 何故かMapPaneが2回マウントされるため、地図が作成されたかを管理するための変数を導入している。解消されたら下記は削除する。
let map: Map | undefined = undefined

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
