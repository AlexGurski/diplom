import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/body-style.css';
import BodyFirst from '../container/BodyFirst'
import BodySecond from '../container/BodySecond';
import BodyThrid from '../container/BodyThrid';
import BodyBetweenLine from '../container/BodyBetweenLine';
import News from '../container/News';

const Homepage = () => {
  return (
    <div className='body-main'>
       <BodyFirst/>
       <BodyBetweenLine/>
       <BodySecond/>  
       <BodyBetweenLine/>     
       <BodyThrid/>       
       <News/>
    </div>
   
  );
}
export { Homepage } 
