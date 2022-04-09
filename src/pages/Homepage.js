import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/homepage-style.css';
import HomepageFirst from '../container/HomepageFirst'
import HomepageContacts from '../container/HomepageContacts'
import HomepageProduction from '../container/HomepageProduction'
import Modal from '../container/modalSend'
import HomepageNews from '../container/HomepageNews'
const Homepage = () => {
  return (
    <div className='body-main'>   
       <HomepageFirst/>
       <HomepageProduction/>
       <HomepageNews/>
       <HomepageContacts/>
    </div>
   
  );
}
export { Homepage } 
