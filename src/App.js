import React,{useState} from 'react';
import './App.css';
import BtnComponent from './Components/BtnComponent';
import DisplayComponent from './Components/DisplayComponent';
function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] =useState();

  const[status,setStatus]=useState(0);

  // not started =0
  //started =1
  //stopped=2
  const start =() =>{
    run()
    setStatus(1)
    setInterv(setInterval(run,10));
  }

  let updatedMS = time.ms, updatedS=time.s, updatedM= time.m, updatedH=time.h;
  const run =()=>{
    if(updatedM ===60){
      updatedH++;
      updatedM=0
    }
    if(updatedS===60){
      updatedM++;
      updatedS=0;
    }
    if(updatedMS===100){
      updatedS++;
      updatedMS=0;
    }
    updatedMS++;
    return setTime({ms:updatedMS, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop =() =>{
    clearInterval(interv);
    setStatus(2);
  };
  const reset =() =>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  };
  const resume =() => start();




  return (
    <div className="main-section">
<div className="clock-holder">
  <div className="stopwatch">
<DisplayComponent time ={time}/>
<BtnComponent status={status} resume={resume} reset={reset} stop={stop} start ={start}/>
  </div>

</div>
      
    </div>
  );
}

export default App;
