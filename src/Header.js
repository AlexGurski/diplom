import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link, useNavigate, Routes, Route } from 'react-router-dom'

import { Search } from './pages/Search';
import './assets/style/header-style.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useCookies } from 'react-cookie';


const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function Header() {
  
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['search']);
  const [array1, setArray1]= useState([]) //инициализация хука состояния

  useEffect(()=>{ //хук который вызывается апм пендере страницы. в нем берутся данные из бд и заносятся в хук состояния
    let arr=[]
    let arr1=[]
    firebase.database().ref('catalog/').orderByKey().on("child_added", function(snapshot) { //обращение к бд к таблице каталог
      arr1.push(snapshot.val())
      setArray1(arr1)//запись состояния

   }, function (error) {
      console.log("Error: " + error.code);
   });
  },[])
  
  const search = (text)=>{ //функция поиска по бд введенного значения
    const rez = []
        array1.forEach(el=>{
            Object.keys(el).map(item=>{
              if (item.toLowerCase().indexOf(text.toLowerCase())>-1){
                rez.push({[item]:el[item]})
              }
            })
        });
        return rez
  }
  return (
<div className="menu">
    <div className="title">|  |</div>
    <ul className="nav">
      <li><Link to='/'>Главная</Link></li>
      <li><Link to='/catalog'>Каталог</Link></li>
      <li><Link to='/about'>О компании</Link></li>
      <li><Link to='/news'>Новости</Link></li>
      <li><Link to='/contacts'>Контакты</Link></li>
      
      <input class="search__input" type="text" placeholder="Поиск" onKeyPress={ ( async e =>{
          if (e.key==='Enter'){
            navigate("/search", { state: { author_name: "John Doe" } }); 
    
            console.log(e.target.value) 
          //  window.location.assign('/search', e.target.value);
            //setCookie('find', search(e.target.value))//вызов функции поиска
            //setTimeout(()=>{window.open("/search",'_self')},10)
            
          }
      } 
        )}/>        
    </ul>
      </div>

  );
}

export default Header;

