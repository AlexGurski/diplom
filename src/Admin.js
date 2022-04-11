import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/admin.css';
import { Link} from 'react-router-dom'
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {MdOutlineCancel} from "react-icons/md";
import {IoIosEye} from "react-icons/io";
import {BsEyeSlashFill} from "react-icons/bs"
import {GrStatusGood} from "react-icons/gr"
const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('feedback');


const Admin = () => {
  const [feedback, setFeedback] = useState([])
  useEffect(()=>{
    database.on('value', snap =>{  
  //  console.log(snap.val())  
    setFeedback(snap.val())    
  })  
  },[])

  const ref = firebase.database().ref('catalog/');
  const [type, setType] = useState('Гантели сборные РГ6М, РГ15М');
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
 
  firebase.database().ref('catalog/'+type+'/').update(qwerty())
    console.log(qwerty()) 
    
}

const responsibleColor = (color)=>{
  if (color===0) return {backgroundColor:'red', color:'black'}
  if (color===1) return {backgroundColor:'yellow', color:'black'}
  if (color===2) return {backgroundColor:'green', color:'black'}
}
const [box, setBox]=useState()
const responsed = (e, clickY, clickX) =>{
  setBox(
    <>
    <div className='choiseBox'style={{backgroundColor:'red', position:'fixed', top:clickY-15, left:clickX+30}} 
    onClick={()=>{
                  firebase.database().ref('feedback/'+e+'').update({response:0});
                  setBox('')}}>
       <BsEyeSlashFill color="black" fontSize="1.5em" /> 
    </div>
    <div className='choiseBox'style={{backgroundColor:'yellow', position:'fixed', top:clickY-15, left:clickX-65}} 
    onClick={()=>{
      firebase.database().ref('feedback/'+e+'').update({response:1});
      setBox('')}}>
      <IoIosEye color="black" fontSize="1.5em" /> 
    </div>
    <div className='choiseBox'style={{backgroundColor:'green', position:'fixed', top:clickY-60, left:clickX-20}} 
    onClick={()=>{
      firebase.database().ref('feedback/'+e+'').update({response:2});
      setBox('')}}>
      <GrStatusGood color="black" fontSize="1.5em" /> 
    </div>
    <div className='choiseBox'style={{backgroundColor:'white', position:'fixed', top:clickY+25, left:clickX-20}} 
    onClick={()=>{
      setBox('')}}>
      <MdOutlineCancel color="black" fontSize="1.5em" />  
    </div>
  </>
  )
}

  return (
    <div className='all-admin'>
      {box}
    <div className='admin-catalog' > 
      тип
      <select onChange={e=>setType(e.target.value)}>
       {dataBase.map(el=><option>{el}</option>)} 
      </select>
      имя
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      discription
      <input type='text'   onKeyPress={
        (e => {
          if (e.key==='Enter'){
            setDiscription([...discription, e.target.value])
            e.target.value=''
          }
        })
          
        } />
      notation
      <input type='text'  value={notationName} onChange={(e) => setNotationName(e.target.value)} />
      <input type='text'  value={notationValue} onChange={(e) => setNotationValue(e.target.value)} />
      picture
      <input type='text'  value={picture} onChange={(e) => setPicture(e.target.value)} />
      plan
      <input type='text'  value={plan} onChange={(e) => setPlan(e.target.value)} />
      pdf
      <input type='text'  value={pdf} onChange={(e) => setPdf(e.target.value)} />
      video
      <input type='text'  value={video}  onChange={(e) => setVideo(e.target.value)} />
      <input type='button' onClick={()=>{addToDB(); setName(''); setNotationName(''); setNotationValue(''); setPicture(''); setPlan(''); setPdf(''); setVideo(''); setDiscription([])}} value='сохранить'/>
    </div>

    
    <div className='feedback'>
        {Object.keys(feedback).map((el)=>
        <div onMouseDown={click=>responsed(el, click.clientY, click.pageX)} key={el} style={responsibleColor(feedback[el].response)}>
         
          <h2>{feedback[el].name}</h2>
          <h5>{feedback[el].organization}</h5>
          <p>{feedback[el].phone}</p>
          <span>{feedback[el].text}</span>
          <h3>{feedback[el].id}</h3>
        </div>)}
    </div>
    </div>
  );
}
export default Admin 
