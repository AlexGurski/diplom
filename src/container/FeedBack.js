import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modalSend'
function FeedBack(props) {
  useEffect(()=>{
    console.log(props.element)
  },[])

  const styles ={
      width:'150px',
      height:'100px',
      position:'fixed',
      bottom:0,
      right:0,
      backgroundColor:'red'
  }
  const [modal,setModal]=useState(false)
    return (
      <>
    {modal?<Modal  onModalClose={()=>{setModal(!modal)}} state={modal} productName={props.element}/>:undefined}
    <div className='feedback-item' style={styles} onClick={()=>setModal(!modal)}>
      Оставить заявку
    </div>
    </>
    )
}
export default FeedBack;
