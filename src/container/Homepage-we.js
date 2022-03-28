import React from 'react';
import ReactDOM from 'react-dom';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {  MdMailOutline } from "react-icons/md";
import {  SiMaildotru } from "react-icons/si";
function HomepageWe() {
  return (
    <>
      <div className='homepage-we'>        
         <img src={require ('./../assets/img/5.jpg')}/>
         <div className='homepage-we-text'>
           тут напишу что нибудь-умное
         </div>           
      </div>
      <div className='homepage-we'>
         <div className='homepage-we-text'>
           тут напишу что нибудь-умное
         </div>           
         <img src={require ('./../assets/img/3.jpg')}/>
      </div>
    </>
        
  );
}
export default HomepageWe;
