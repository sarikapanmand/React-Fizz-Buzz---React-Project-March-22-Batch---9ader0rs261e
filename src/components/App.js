import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const[counter,setCounter] = useState(1);
  const[cls,setCls] = useState('normal');
  
  useEffect(()=>{
   if(counter % 3 === 0 && counter % 5 === 0){setCls("fizzbuzz")}
   else if(counter % 3 === 0){setCls("fizz")}
   else if(counter % 5 === 0){setCls("buzz")}
   else{setCls('normal')}
  },[counter])
  return (
    <div id="main">
    <button id="increment" onClick={()=>setCounter(counter + 1)}>Increment</button>
     <div id="counter" className={cls}>{counter}</div>
     <button id="decrement" onClick={()=>setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}


export default App;
