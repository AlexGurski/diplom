import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import '../assets/style/contacts.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import firebaseConfig from './../container/base'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('contacts');

const mapData = {
  center: [53.14829239965705,26.017544626983604],
  zoom: 16,
};
const coordinates = [
  [53.14829239965705,26.017544626983604]
];

function Contacts() {

  const [state, setState] = useState([]);
  useEffect(()=>{
    database.on('value', snap =>{  
    setState(snap.val())      
  })  
  },[])

  return (

<div className="contacts">

  <div className='contacts-container'>
    <div className='contacts-left'>
    <h2>Контакты</h2>
      <div className='paper-container'>
        <div class="paper">
              <h4>Адрес</h4>
              <p>Республика Беларусь, г. Барановичи, ул. Пролетарская, 40</p>
          </div>
          <div class="paper">
              <h4>Время работы</h4>
                <div className='paper-p paperWork'>
                  <p>Пн. – Пт. 7:30-16:00</p>
                  <p>Обед 12:00-12:30</p>
                </div>
          </div>
          <div class="paper">            
              <h4>Отдел маркетинга и продаж</h4>
            <div className='paper-p paperPhone'>
              <p>тел: +375 (163) 67-25-73, 64-49-73</p>
              <p>факс: 67-29-95</p>
              <p>E-mail: bzsp-omip@mail.ru</p>
             </div>
          </div>
      </div>
        
    </div>
    <div className='contacts-right'>
    <YMaps>
                <Map  width='100%' height='100%' defaultState={mapData}>
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
     </YMaps>
    </div>
  </div>
  <div className='info-table'>
    
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"></div>
      <div class="col col-2">ТЕЛЕФОН</div>
      <div class="col col-3">	ФАКС</div>
      <div class="col col-4">	E-MAIL</div>
    </li>
    {state.map(el=>
      <li class="table-row">
      <div class="col col-1" data-label="Job Id">{el.name}</div>
      <div class="col col-2" data-label="Customer Name">{el.phone}</div>
      <div class="col col-3" data-label="Amount">{el.fax}</div>
      <div class="col col-4" data-label="Payment Status">{el.email}</div>
    </li>
      )}
    
    
  </ul>
  </div>
</div>

  );
}

export {Contacts}  ;

