import React, { useEffect, useState } from 'react';
import Modal from './modalSend'
import '../assets/style/product.css';
function FeedBack(props) {
  useEffect(()=>{
    console.log(props.element)
  },[])

 
  const [modal,setModal]=useState(false)
    return (
      <>
    {modal?<Modal  onModalClose={()=>{setModal(!modal)}} state={modal} productName={props.element}/>:undefined}
    <div class="letter-image" onClick={()=>setModal(!modal)}>
      <div class="animated-mail">
        <div class="back-fold"></div>
        <div class="letter">
          <div class="letter-border"></div>
          <div class="letter-title"></div>
          <div class="letter-context"></div>
          <div class="letter-stamp">
            <div class="letter-stamp-inner"></div>
          </div>
        </div>
        <div class="top-fold"></div>
        <div class="body"></div>
        <div class="left-fold"></div>
      </div>
      <div class="shadow"></div>
    </div>

    </>
    )
}
export default FeedBack;
