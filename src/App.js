import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Result from './components/result';
import Header from './components/header';
import Alerts from './components/alerts';
import Form from './components/form';


function App() {
  const [show,setShow] = useState(true);
  const [lucky,setLucky] = useState(false);
  const [showresult,setShowResult] = useState();
  let [date,setDate] = useState("");
  const [num,setNum] = useState();
  let [sum,setSum] = useState("");

  function handledel(){
  setShow(false);
  }

 
  

  function handleSubmit(e){

    e.preventDefault();

    

    var l=0;

     sum = date.split("-");

     for(let i=0;i<3;i++){
      l = l +  divide(Number(sum[i]));
     }
     

    setSum(l);
    
   function divide(value){
    var s = 0 ;
    while(value){
      s += value % 10;
      value = Math.floor(value / 10);
    }
    return s;
    }
     
    if(l % num === 0){
      setLucky(true);
    }else {
      setLucky(false);
    }
    

    setShowResult(true);
  }
  

  return (
    
    <div className="App">
      <div className="bgimg">
      <Header />
      </div>
      <section id="mainSection" className="section">
        {show ? 
        <Alerts handledel={handledel}/> : " "}
        <h2>Enter Your Birthdate and lucky number to continue...</h2>
        <Form date={date} setDate={setDate} num={num} setNum={setNum} handleSubmit={handleSubmit}/>
        {showresult ? <Result lucky={lucky}/> : " "}
        
        <Footer />
        
        
      </section>
    </div>
  );
}

export default App;
