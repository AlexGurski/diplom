import React,{useState,useEffect, Component} from 'react';
import './assets/style/footer-style.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [53.14829239965705,26.017544626983604],
  zoom: 14,
};
const coordinates = [
  [53.14829239965705,26.017544626983604]
];

const App = () => (
  <div className='footer'>
    <YMaps>
        <Map  width='100%' height='400px' defaultState={mapData}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
    </YMaps>
    <div className='footer-bottom'>
      Нормально или дерьмо? тут будет написана всякая хуйня. Футер короче
    </div>
  </div>
 
);

export default App;

