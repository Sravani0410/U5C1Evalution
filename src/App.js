import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   const [score,setScore]=useState(50)
   const [wicket,setWicket]=useState(2);
   const [over,setOver]=useState(50)
   const [ball,setBall]=useState(50)
  
   const handleover=()=>{
    if(over<=10){
      return ;
    }
    setOver(over+1)
  }
   const handleball=()=>{
    if(ball<=6){
      return ;
    }
    setBall(ball+1)
  }
   const handleWicket=()=>{
    if(wicket>=12){
      return ;
    }
    setWicket(wicket+1)
  }
   const add1=()=>{
     if(score<=100){
       return <h1>India Won</h1>
     }
     setScore(score+1)
   }
   const add4=()=>{
    if(score<=100){
      return <h1>India Won</h1>
    }
    setScore(score+4)
  }
  const add6=()=>{
    if(score<=100){
      return <h1>India Won</h1>
    }
    setScore(score+6)
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{score}
          <h1 className="scoreCount">
            {
              // show "score" here
            
              
             score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              ball
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={add1}>Add 1</button>
        <button className="addScore4" onClick={add4}>Add 4</button>
        <button className="addScore6" onClick={add6}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handleWicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onclick={handleball}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}



export default App;
