import React from 'react';
import ReactDOM from 'react-dom';
import './../assets/style/news-style.css';
function News() {
  return (
    <>
    <h1 className='news-title'>НОВОСТИ</h1> 
    <div className="news">       
      <div className='news-form'>
        <img className='news-form-img' src='./../../news/holliday.jpg'></img>
        <span className='news-form-date'>1 января 2022г</span> 
        <h4 className='news-form-name'>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
        <div className='news-form-text'>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).
        </div>
      </div>
      <div className='news-form'>
        <img className='news-form-img' src='./../../news/holliday.jpg'></img>
        <span className='news-form-date'>1 января 2022г</span> 
        <h4 className='news-form-name'>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
        <div className='news-form-text'>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).
        </div>
      </div>
      <div className='news-form'>
        <img className='news-form-img' src='./../../news/holliday.jpg'></img>
        <span className='news-form-date'>1 января 2022г</span> 
        <h4 className='news-form-name'>8-я международная специализированная выставка "Машиностроение-2022" в Минске</h4>
        <div className='news-form-text'>В период с 5 по 8 апреля 2022 г. в Минске, пр-т. Победителей, 20/2, Футбольный манеж, пройдет международная специализированная выставка «Машиностроение-2022», на которой будет экспонироваться продукция нашего завода (стенд В4).
        </div>
      </div>
    </div>
    </>
    
  );
}

export default News;
