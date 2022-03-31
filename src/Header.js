import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './assets/style/header-style.css';
function Header() {


  return (
<div className="menu">
    <div className="title">|  |</div>
    <ul className="nav">
    <li><Link to='/'>Главная</Link></li>
      <li><Link to='/catalog'>Каталог</Link></li>
      <li><Link to='#'>О компании</Link></li>
      <li><Link to='#'>Новости</Link></li>
      <li><Link to='#'>Контакты</Link></li>
      <li><a>поиск</a> </li>          
    </ul>
</div>

  );
}

export default Header;

