import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './../container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import './../assets/style/modal.css';

const app = firebase.initializeApp(firebaseConfig);

function Modal(props) {
  const [message, setMesage] = useState({
    id:'',
    name:'',
    organization:'',
    email:'',
    phone:'',
    text:''
  })
    return (
    <div className='modal'>
    
   <div class="login-box">
     <div className='closeModal' onClick={()=>props.onModalClose()}>╳</div>
  <h2>Оставить заявку </h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" onChange={(e)=>setMesage({...message, 'name':e.target.value, 'id':Date()})} />
      <label>Фамилия Имя</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" onChange={(e)=>setMesage({...message, 'organization':e.target.value, 'id':Date()})} />
      <label>Название организации</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" onChange={(e)=>setMesage({...message, 'email':e.target.value, 'id':Date()})} />
      <label>Электронная почта</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" onChange={(e)=>setMesage({...message, 'phone':e.target.value, 'id':Date()})} />
      <label>Телефон</label>
    </div>
    <div class="user-box">
      <textarea cols="30" rows="5"  onChange={(e)=>setMesage({...message, 'text':e.target.value, 'id':Date()})} >
      {props.productName}
      </textarea>
      <label>Сообщение</label>
    </div>
    <a onClick={()=>{
     
      setMesage({...message});
      console.log(message)
      firebase.database().ref('feedback/'+message.name+'_'+message.organization).update(message);
      props.onModalClose()
        }
      }> 
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
