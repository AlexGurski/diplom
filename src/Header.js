import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/header-style.css';
function Header() {
  return (
    <div className="Header">      
      <div class='header-main'>
        <div id='header-logo'></div>
        <div class='header-main-nav'>
            <div><a>Каталог</a></div>  
            <div><a>О компании</a></div>
            <div><a>Новости</a></div>
            <div><a>Контакты</a></div>
             <div><a>поиск</a> </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
