import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/news.css';
import { Link} from 'react-router-dom'

const ModalNews = (props) =>
  <div id="open-modal" class="modal-window">
    {console.log(props)}
  <div>
  <div className='closeModalNews' onClick={()=>props.onModalClose()}>╳</div>
    <h1>{props.news.name}</h1>
    {props.news.text.map(el=><p key={el+el}>{el}</p>)}
    
    <div><small>{props.news.date}</small></div>
  </div>
  </div>


const News = ({news}) => {

  const [state, setState]=useState(news)
  const [count,setCount]=useState({
    name:'',
    text:'',
    date:''
  })
  const [modal, setModal]=useState(false)

  useEffect(()=>{
    if (news){setState(news.reverse())}
    console.log(news)
  },[news])


  return (
    <div className='news'>    
    <h2>НОВОСТИ</h2>  
    {modal?<ModalNews  onModalClose={()=>{setModal(!modal)}} state={modal} news={count}/>:undefined}
       <div className='news-container'>
         {
          state.map(el=>
            <div className="blog-card" key={el.text}  onClick={()=>{setModal(!modal); setCount({name:el.name, text:el.text, date:el.date})}}>            
              <img className="blog-img" src={require('./../assets/img/news/'+el.image)}   />
              <div className="text-overlay">
                <h5>{el.name}</h5>
                <p>{el.short}</p>
              </div>
            </div>
         )
         }
      </div>
    </div>
   
  );
}
export { News } 
