import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/productions.css';
import { Link} from 'react-router-dom'

import 'firebase/compat/database';
import { useParams} from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Search = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['find']);

  useEffect(()=>{
    console.log(cookies)
    removeCookie('search')
  },[])

  return(

        <>
        </>

  )
}
export { Search } 
