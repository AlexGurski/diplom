import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom'

import Header from './Header';
import { Homepage } from './pages/Homepage';
import { Catalog } from './pages/Catalog';
import { Productions } from './pages/Productions';
import { Product} from './pages/Product';
import Footer from './Footer';
import './assets/style/all-style.css'

import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('catalog');


const App = () =>{
     const [state, setState] = useState([]);
     useEffect(()=>{
       database.on('value', snap =>{  
        // console.log(snap.val())
       setState(snap.val())      
     })  
     },[])
     return (<>
          <Header/>      
          <Routes>
               <Route path='/' element={<Homepage/>}/>  
               <Route path='/catalog' element={<Catalog db={state}/> }/> 
               <Route path="/catalog/:id" element={<Productions db={state}/>} />
               <Route path="/catalog/:id/:product" element={<Product db={state}/>} />
          </Routes>   
          <Footer />
          </>)
}
     
     
export default App;




