import React from 'react';
import ReactDOM from 'react-dom';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {  MdMailOutline } from "react-icons/md";
import {  SiMaildotru } from "react-icons/si";
function HomepageFirst() {
  return (
       <div className='homepage-info'>
        <div className='homepage-info-container'>
        <div className='homepage-info-container-info'>          
              <span className='head-phone'><BiPhoneCall className='info-ico'/>375 163 67-25-73 </span>               
              <span className='head-email'><SiMaildotru className='info-ico'/>bzsp.omip@gmail.com </span> 
              <span className='head-adres'><BiMap className='info-ico'/>Республика Беларусь,г. Барановичи, ул. Пролетарская, 40</span>
              <span className='head-mail'><MdMailOutline className='info-ico'/>225411</span>
        </div>
        </div> 
          Тут будет форма для заявки
      </div>   
  );
}
export default HomepageFirst;
