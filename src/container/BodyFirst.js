import React from 'react';
import ReactDOM from 'react-dom';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {  MdMailOutline } from "react-icons/md";
import {  SiMaildotru } from "react-icons/si";
function BodyFirst() {
  return (
       <div className='body-first'>
         <div className='body-first-text'>
            <h1>Новая линейка патронов "ППМ"</h1>
            <h2>Высокоточные механизированные полые патроны Ø170-400 мм с обычным проходным отверстием и Ø210-315 с большим проходным отверстием</h2>
            <span>Всегда в наличии.<br></br> Отправка Товара в день обращения</span>
            <button className='button-mainpage'>Скачать прайс-лист</button>
            <div className='body-first-text-info'>
              <span className='head-phone'><BiPhoneCall className='info-ico'/>375 163 67-25-73 </span>               
              <span className='head-email'><SiMaildotru className='info-ico'/>bzsp.omip@gmail.com </span> 
              <span className='head-adres'><BiMap className='info-ico'/>Республика Беларусь,г. Барановичи, ул. Пролетарская, 40</span>
              <span className='head-mail'><MdMailOutline className='info-ico'/>225411</span>
            </div>                      
         </div>    
         <div className='body-first-img'> 
         </div>     
      </div>   
  );
}
export default BodyFirst;
