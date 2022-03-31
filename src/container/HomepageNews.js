import React,{useState,useEffect, Component} from 'react';
import ReactDOM from 'react-dom';
import './../assets/style/news-style.css';
import firebaseConfig from './base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Link} from 'react-router-dom'
class News extends Component{
  constructor(){
    super()
    this.state = {
      newsArray:[]
    }
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref('news')
  }

  newsBlock = ({date,name,discription,img})=>{
    return(
          <> 
          
              <div className='news-form'>
              <img className='news-form-img' src={require ('./../assets/img/news/'+img)}></img>
                <span className='news-form-date'>{date}</span> 
                <h4 className='news-form-name'>{name} </h4>
                <div className='news-form-text'> {discription}</div>
              </div>              
          </>
      )       
} 
  componentDidMount(){
  this.database.on('value', snap =>{
    this.setState({
      newsArray:snap.val()
    })    
   })
}
  render(){
    return (
      <>
      
      <div className='news-form'>
      <h2>НАШИ НОВОСТИ</h2>
      <div className='news-form-container'>
      <div className="card">
            <div className="imgBx">
                <img src={require ('./../assets/img/news/43_image002-3-370x200-cf7.jpg')}/>
                <h4>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
            </div>
            <div className="details">
                <h4>Выставка "Машиностроение-2022" в Минске</h4>
                <p>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).</p>
            </div>
      </div>
      <div className="card">
            <div className="imgBx">
                <img src={require ('./../assets/img/news/eaf51965297177492a35fce047aef0c7-370x200-571.jpg')}/>
                <h4>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
            </div>
            <div className="details">
                <h4>Выставка "Машиностроение-2022" в Минске</h4>
                <p>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).</p>
            </div>
      </div>
      <div className="card">
            <div className="imgBx">
                <img src={require ('./../assets/img/news/energy-kopiya-370x200-8e2.jpg')}/>
                <h4>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
            </div>
            <div className="details">
                <h4>Выставка "Машиностроение-2022" в Минске</h4>
                <p>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).</p>
            </div>
      </div>
      <div className="card">
            <div className="imgBx">
                <img src={require ('./../assets/img/news/eaf51965297177492a35fce047aef0c7-370x200-571.jpg')}/>
                <h4>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
            </div>
            <div className="details">
                <h4>Выставка "Машиностроение-2022" в Минске</h4>
                <p>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).</p>
            </div>
      </div>
      <div className="card">
            <div className="imgBx">
                <img src={require ('./../assets/img/news/energy-kopiya-370x200-8e2.jpg')}/>
                <h4>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
            </div>
            <div className="details">
                <h4>Выставка "Машиностроение-2022" в Минске</h4>
                <p>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).</p>
            </div>
      </div>
      </div>
      <Link id='homepage-about-right-button'to='/catalog'>Все новости +</Link> 
</div>
      </>
    )
  }
}

export default News;
