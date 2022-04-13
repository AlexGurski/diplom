import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link, useNavigate, Routes, Route } from 'react-router-dom'

import './assets/style/header-style.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function Header() {
  
  const navigate = useNavigate();
  const [check, setCheck]=useState(false)
  
  return (
    <>
  <nav id='navigat' role="navigation">
            <div id="menuToggle">
              <input type="checkbox" onClick={()=>setCheck(!check)} checked={check}/>
                <span></span>
                <span></span>
                <span></span>
            <ul className="nav" id="menu">
                <li onClick={()=>setCheck(!check)}><Link to='/' class="nav-item">Главная</Link></li>
                <li onClick={()=>setCheck(!check)}><Link to='/catalog' class="nav-item">Каталог</Link></li>
                <li onClick={()=>setCheck(!check)}><Link to='/about' class="nav-item">О компании</Link></li>
                <li onClick={()=>setCheck(!check)}><Link to='/news' class="nav-item">Новости</Link></li>
                <li onClick={()=>setCheck(!check)}><Link to='/contacts' class="nav-item">Контакты</Link></li>              
            </ul>
           </div>
  </nav>

<div className="menu">
  <div className="title">|  |</div>
    <ul className="nav">
      <li><Link to='/' class="nav-item">Главная</Link></li>
      <li><Link to='/catalog' class="nav-item">Каталог</Link></li>
      <li><Link to='/about' class="nav-item">О компании</Link></li>
      <li><Link to='/news' class="nav-item">Новости</Link></li>
      <li><Link to='/contacts' class="nav-item">Контакты</Link></li>
      <input class="search__input" type="text" placeholder="Поиск" onKeyPress={ ( async e =>{
          if (e.key==='Enter'){
            navigate("/search/"+e.target.value); 
            e.target.value='';
            console.log(e.target.value) 
          }
      } 
        )}/>        
    </ul>
 </div>
 </>
  );
}

export default Header;

