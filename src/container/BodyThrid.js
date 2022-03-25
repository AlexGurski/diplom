import React from 'react';
import ReactDOM from 'react-dom';
function BodyThrid() {
  return (
       <div className='body-thrid'>
         <div className='body-second-text'>
            <h1>Детали для тракторов ОАО МТЗ</h1>
            <dl>
              <dt>В компании вы можете купить детали трактора МТЗ, обладающие рядом преимуществ:</dt>
                <dd>Надежная сертифицированная продукция;</dd>
                <dd>Доступная цена. Вы покупаете продукты у поставщика, избегая переплат дилерам и посреднических расходов;</dd>
                <dd>Быстрая доставка по Беларуси;</dd>
                <dd>Профессиональная консультация;</dd>
                <dd>Скидки при оптовых закупках.</dd>
            </dl> 
            <div className='body-second-send-form'>
              <div className='body-second-send-form-name'>Заявка на консультацию</div>   
              <div className='body-second-send-form-main'>
                <div className='body-second-send-form-main-top'>
                    Для получения консультации - оставьте свой номер. И наш менеджер Вам перезвонит.
                </div>
                <div className='body-second-send-form-main-bottom'>
                    <input type="text" name="phone" />                    
                    <button className='body-second-send-form-main-bottom-button button-mainpage'>Оставить заявку</button>
                </div>
              </div>  
            </div>           
         </div>   
          
         <div className='body-thrid-img'> 
         </div>         
      </div>   
  );
}
export default BodyThrid;
