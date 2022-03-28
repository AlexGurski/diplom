import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom'

import Header from './Header';
import { Homepage } from './pages/Homepage';
import { Catalog } from './pages/Catalog';
import Footer from './Footer';

import './assets/style/all-style.css'

const App = () =>
     <>
     <Header/>      
     <Routes>
          <Route path='/' element={<Homepage/>}/>  
          <Route path='/catalog' element={<Catalog/>}/> 
     </Routes>   
     <Footer />
     </>
export default App;




