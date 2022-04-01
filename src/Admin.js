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
  var ref = firebase.database().ref('catalog/');

  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState('');
  const [notationName, setNotationName] = useState('');
  const [notationValue, setNotationValue] = useState('');
  const [picture, setPicture] = useState('');
  const [plan, setPlan] = useState('');
  const [pdf, setPdf] = useState('');
  const [video, setVideo] = useState('');

  useEffect(()=>{
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
   }, function (error) {
      console.log("Error: " + error.code);
   });
    
  },[])

 

const addToDB = ()=>{

 ref.update({
    type:{
    //  image:'ganteli-1.jpg',
        name:{
        discription:{1:discription},
        notation:{
          notationName:notationValue
        },
        image:{
          picture:picture,
          plan:plan,
          pdf:pdf,
          video:video
        }
      }
    }
  })

}
     
 

  return (
    <div className='admin-catalog' > 
      тип
      <input type='text' onChange={(e) => setType(e.target.value)}/>
      имя
      <input type='text' onChange={(e) => setName(e.target.value)}/>
      discription
      <input type='text' onChange={(e) => setDiscription(e.target.value)}/>
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
