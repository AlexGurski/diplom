import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/news.css';
import { Link} from 'react-router-dom'

const News = ({news}) => {
  const [state, setState]=useState([])
  useEffect(()=>{
    if (news){setState(news)}
    console.log(news)
  },[news])

  return (
    <div className='news'>    
    <h2>НОВОСТИ</h2>  
       <div className='news-container'>
         {
          state.reverse().map(el=>
            <Link to='#'className="blog-card">
                {console.log(el)}
              <img className="blog-img" src={require('./../assets/img/news/'+el.image)} />
              <div className="text-overlay">
                <h5>{el.name}</h5>
                <p>{el.short}</p>
              </div>
            </Link>
         )
         }
      </div>
    </div>
   
  );
}
export { News } 
