import React,{useState,useEffect, Component} from 'react';
import ReactDOM from 'react-dom';
import './../assets/style/news-style.css';
import firebaseConfig from './base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

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
      <h1 className='news-title'>НОВОСТИ</h1> 
      <div className="news">       
        {  
          this.state.newsArray.map((el,count)=><this.newsBlock key={el.name}  className="news-form" name={el.name} date={el.date} img={el.image} discription={el.discription}/>)
        } 
      </div>
      <button className='button-mainpage'>Все новости</button> 
      </>
    )
  }
}

export default News;
