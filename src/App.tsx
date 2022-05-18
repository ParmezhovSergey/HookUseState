import React, { useState } from "react";
//import "./App.css";
import style from './App.module.css'


  const App = () => {
  let [manCounter, manSetCounter] = useState(0);
  let [womanCounter, womanSetCounter] = useState(0);

  return (
    <div className={style.app}>
      <div className={style.counter}>
      <div className={style.man}>
        <div >Man</div>
        <div className={style.manCounter}>{manCounter}</div>
        <button className={style.butt} onClick={()=> {
          manSetCounter((actual)=> actual + 1)
        }} >+</button>
      </div>
      
      <div className={style.woman}>
        <div>Woman</div>
        <div className={style.manCounter}>{womanCounter}</div>
        <button className={style.butt} onClick={()=>{
          womanSetCounter((actual)=> actual +1)
        }} >+</button>
      </div>
      </div>
      
      
      <div className={style.button}>
        <div> <button className={style.butt} onClick={()=> {
        manSetCounter((actual)=> actual - 1)
        womanSetCounter((actual)=> actual -1)
      }} >-</button></div>
        <div> <button className={style.reset} onClick={()=> {
        manSetCounter(0)
        womanSetCounter(0)
      }} >reset</button></div>
      
     
      </div>
      
    </div>
  );
};

export default App;
