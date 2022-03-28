import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/catalog.css';
import firebaseConfig from '../container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Link} from 'react-router-dom'

const app = firebase.initializeApp(firebaseConfig);

   const Category = ({name,image})=>{
     return (     
    <div className='catalog-product'>
       {image!=undefined ? <img src={require ('./../assets/img/product/'+image)}/>:<img/>} 
       <span>{name}</span>
    </div>
  )
   }

      const Catalog = (db) => {  
  const [state, setState] = useState([]);
  useEffect(()=>{
    setState(db.db) 
  },[db])

  return (
    <div className='catalog'>          
       <div className='catalog-name'>
         <span>Каталог продукции</span>
         <div>PDF</div>
       </div>  
       <div className='catalog-catalog'>        
       {
        Object.keys(state).map(el=>
              <Link to={`/catalog/${el}`} key={el}>
                <Category  name={el} image={state[el].image}/>
               </Link>
        )
      }
      </div>
    </div>
  );
}
export { Catalog } 
