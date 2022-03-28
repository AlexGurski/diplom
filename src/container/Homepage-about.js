import React from 'react';
import ReactDOM from 'react-dom';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {  MdMailOutline } from "react-icons/md";
import {  SiMaildotru } from "react-icons/si";
function HomepageAbout() {
  return (
       <div className='homepage-about'>
            <div className='homepage-about-container'>
                  <img/>
                  <span className='homepage-about-container-title'>75</span>
                  <span className='homepage-about-container-text'>лет успешной работы</span>
            </div>
            <div className='homepage-about-container'>
                  <img/>
                  <span className='homepage-about-container-title'>390</span>
                  <span className='homepage-about-container-text'>сотрудников</span>
            </div>
            <div className='homepage-about-container'>
                  <img/>
                  <span className='homepage-about-container-title'>250</span>
                  <span className='homepage-about-container-text'>типоразмеров оснастки</span>
            </div>
            <div className='homepage-about-container'>
                  <img/>
                  <span className='homepage-about-container-title'>30</span>
                  <span className='homepage-about-container-text'>дилеров в странах СНГ</span>
            </div>
      </div>   
  );
}
export default HomepageAbout;
