import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './../assets/style/modal.css';

function Modal(props) {
  return (
    <div className='modal'>
    
   <div class="login-box">
     <div className='closeModal' onClick={()=>props.onModalClose()}>╳</div>
  <h2>Оставить заявку </h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Фамилия Имя</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Название организации</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Электронная почта</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Телефон</label>
    </div>
    <div class="user-box">
      <textarea name="" required=""/>
      <label>Сообщение</label>
    </div>
    <a href="#" > 
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Отправить
    </a>
  </form>
</div>
    </div>
    )
}
export default Modal;
