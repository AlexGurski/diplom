import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/admin.css';
import { Link} from 'react-router-dom'
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

const Admin = () => {
  const ref = firebase.database().ref('catalog/');

  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState([]);
  const [notationName, setNotationName] = useState('');
  const [notationValue, setNotationValue] = useState('');
  const [picture, setPicture] = useState('');
  const [plan, setPlan] = useState('');
  const [pdf, setPdf] = useState('');
  const [video, setVideo] = useState('');


  const[dataBase, setDataBase] = useState([])
  useEffect(()=>{
    ref.on("value", function(snapshot) {
      //console.log(Object.keys(snapshot.val()) );
      setDataBase(Object.keys(snapshot.val()) )
   }, function (error) {
      console.log("Error: " + error.code);
   });
    
  },[])

const addToDB = ()=>{

  let qwerty = ()=> {
    let qwer = {}
    if (discription){
      qwer[name]={...qwer[name],
        discription:discription, 
      }
    }
  
  if (picture){
    qwer[name]={...qwer[name],
      image:{
        picture:picture
      }
    }
  }
 
  if (plan){
    qwer[name]={...qwer[name],
      image:{
        ...qwer[name].image,
        plan:plan
      }
    }
  }
  

 if (pdf){
      qwer[name]={...qwer[name],
        image:{
          ...qwer[name].image,
          pdf:pdf
        }
      }
 } 

if (video) {
  qwer[name]={...qwer[name],
    image:{
      ...qwer[name].image,
      video:video
    }
  }
} 
if (notationName){
  qwer[name]={...qwer[name],
    notation:{
      [notationName]:notationValue
    }
  }
}
return qwer
  }
  firebase.database().ref('catalog/'+type).update(
      qwerty() 
    )
    console.log(qwerty())  
}
     
  return (
    <div className='admin-catalog' > 
      тип
      <select onChange={e=>setType(e.target.value)}>
       {dataBase.map(el=><option>{el}</option>)} 
      </select>
      имя
      <input type='text' onChange={(e) => setName(e.target.value)}/>
      discription
      <input type='text' onKeyPress={(e => e.key==='Enter'?setDiscription([...discription, e.target.value]):console.log( ))}/>
      notation
      <input type='text' onChange={(e) => setNotationName(e.target.value)} />
      <input type='text' onChange={(e) => setNotationValue(e.target.value)} />
      picture
      <input type='text'onChange={(e) => setPicture(e.target.value)} />
      plan
      <input type='text'onChange={(e) => setPlan(e.target.value)} />
      pdf
      <input type='text'onChange={(e) => setPdf(e.target.value)} />
      video
      <input type='text' onChange={(e) => setVideo(e.target.value)} />
      <input type='button' onClick={addToDB} value='сохранить'/>
    </div>
   
  );
}
export default Admin 
