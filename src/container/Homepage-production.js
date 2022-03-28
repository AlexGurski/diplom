import React from 'react';
import ReactDOM from 'react-dom';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {  MdMailOutline } from "react-icons/md";
import {  SiMaildotru } from "react-icons/si";
function HomepageProduction() {
  return (
       <div className='homepage-production'>
            <div className='homepage-production-text'>
            ОАО «Барановичский завод станкопринадлежностей» — производитель универсальной зажимной технологической оснастки, необходимой для комплектации металлорежущих станков токарной, фрезерной, сверлильной и строгальной групп, а также узлов и деталей для автомобильной и тракторной техники.

Благодаря надежности и долговечности, технологическая оснастка Барановичского завода станкопринадлежностей завоевала высокую репутацию среди ведущих станкостроительных и машиностроительных предприятий СНГ и Балтии
            </div>
            <div className='homepage-production-image'>
            <img src={require ('./../assets/img/4.jpg')}/>
            <img src={require ('./../assets/img/product/ganteli-1.jpg')}/> 
            <img src={require ('./../assets/img/1.jpg')}/>          
            <img src={require ('./../assets/img/product/cilindr-pnevmaticheskij-cpv-200.jpg')}/>
            <img src={require ('./../assets/img/6.jpg')}/>
            <img src={require ('./../assets/img/product/pr-630.jpg')}/>
            
            </div>
      </div>   
  );
}
export default HomepageProduction;
