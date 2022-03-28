import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/homepage-style.css';
import HomepageFirst from '../container/Homepage-first'
import HomepageAbout from '../container/Homepage-about'
import HomepageProduction from '../container/Homepage-production'
import HomepageWe from '../container/Homepage-we'
import HomepageFeedback from '../container/Homepage-feedback'
const Homepage = () => {
  return (
    <div className='body-main'>
       <HomepageFirst/>
       <HomepageAbout/>
       <HomepageProduction/>
       <HomepageWe/>
       <HomepageFeedback/>
    </div>
   
  );
}
export { Homepage } 
