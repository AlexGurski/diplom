import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/productions.css';
import { Link} from 'react-router-dom'

import 'firebase/compat/database';


const Search = (state) => {


  useEffect(()=>{
    console.log(state)
   
  },[state])

  return(

        <>
        </>

  )
}
export { Search } 
