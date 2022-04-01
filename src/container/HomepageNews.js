import React,{useState,useEffect, Component} from 'react';
import ReactDOM from 'react-dom';
import './../assets/style/homepagenews-style.css';
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

  componentDidMount(){
  this.database.on('value', snap =>{
    this.setState({
      newsArray:snap.val().reverse().map(el=>
      <Link to={'/news'} className="card">
          <div className="imgBx">
            <img src={require ('./../assets/img/news/'+el.image)}/>
            <h5>{el.date}</h5>
              <h4>{el.name}</h4>
          </div>
          <div className="details">
              
              <h4>{el.name}</h4>
              <p>{el.short}</p>
          </div>
      </Link>
        )
    })    
   })
}
  render(){
    return (
      <>
      <div className='news-form'>
      <h2>НАШИ НОВОСТИ</h2>
      <div className='news-form-container'>
        {
        this.state.newsArray
        }
      
      </div>
      <Link id='homepage-about-right-button'to='/news'>Все новости +</Link> 
</div>
      </>
    )
  }
}

export default News;
