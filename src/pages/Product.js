import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/catalog.css';
import { Link} from 'react-router-dom'

import 'firebase/compat/database';
import { useParams} from 'react-router-dom'

const Product = (db) => {
const {id, product} =  useParams();

const [productName, setProductName]=useState([])
const [productList, setProductList]=useState([])

useEffect(()=>{  
  console.log(id)
  console.log(product);
  setProductList(Object.keys(db.db))
  db.db[id] !=undefined ? setProductName(db.db[id][product]):setProductName([])
},[db.db[id]])

  return (
    <div className='Product'>  
      {
        <div>
          {productName.discription}
        </div>
      }
    </div>      
  );
}
export { Product } 
