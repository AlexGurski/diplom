import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/catalog.css';
import firebaseConfig from '../container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getDatabase, ref, child, get } from "firebase/database";

const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('catalog');

const dbRef = ref(getDatabase());

   const Category = ({name,image})=>{
     return (     
    <div className='catalog-product'>
       {image!=undefined ? <img src={require ('./../assets/img/product/'+image)}/>:<img/>} 
       <span>{name}</span>
    </div>
  )
   }

      const Catalog = () => {
  const [state, setState] = useState([]);
  useEffect(()=>{
    database.on('value', snap =>{  
      console.log(snap.val())
    setState(snap.val())      
 })  
},[])

  return (
    <div className='catalog'>          
       <div className='catalog-name'>
         <span>Каталог продукции</span>
         <div>PDF</div>
       </div>  
       <div className='catalog-catalog'>    
       {
        Object.keys(state).map(el=><Category key={el} name={el} image={state[el].image}/>)
      }
      </div>
    </div>
  );
}
export { Catalog } 
