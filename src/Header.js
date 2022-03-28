import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './assets/style/header-style.css';
function Header() {
  return (
    <div className="Header">      
      <div className='header-main'>
        <Link to='/' className='header-logo-link'></Link>
        <div className='header-main-nav'>
            <div><Link to='/catalog'>Каталог</Link></div>  
            <div><Link to='#'>О компании</Link></div>
            <div><Link to='#'>Новости</Link></div>
            <div><Link to='#'>Контакты</Link></div>
            <div><a>поиск</a> </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
