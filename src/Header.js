import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './assets/style/header-style.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useCookies } from 'react-cookie';


const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function Header() {

  const [cookies, setCookie, removeCookie] = useCookies(['search']);
  const [array1, setArray1]= useState([])
  useEffect(()=>{
    let arr=[]
    let arr1=[]
    firebase.database().ref('catalog/').orderByKey().on("child_added", function(snapshot) {
      arr1.push(snapshot.val())
      setArray1(arr1)

   }, function (error) {
      console.log("Error: " + error.code);
   });
  },[])
  
  const search = (text)=>{
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
      
      <input class="search__input" type="text" placeholder="Поиск" onKeyPress={(e =>{
          if (e.key==='Enter'){
            console.log() 
            setCookie('find', search(e.target.value))
            setTimeout(()=>{window.open("/search",'_self')},10)
            e.target.value=''
          }
      } 
        )}/>        
    </ul>
      </div>

  );
}

export default Header;

