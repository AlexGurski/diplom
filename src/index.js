import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';
import Footer from './container/Footer';

import './assets/style/all-style.css'



ReactDOM.render(
     <Header/>,document.getElementById('head'),
);
ReactDOM.render(    
     <Body />,document.getElementById('body'),
);
ReactDOM.render(    
     <Footer/>,document.getElementById('footer'),
);




