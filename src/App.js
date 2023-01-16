import React, { useState, useEffect } from "react";


function App() {
  const[count, setCount]= useState(0);
  const [text, setText]= useState("");

  useEffect(
    // 1st arg: side effect (callback function)
    () => console.log("useEffect called"),
    // 2nd arg: dependencies array
    [count]
  );

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, [count]);

  console.log("Component rendering");

  return(
    <div>
      <button onClick={()=> setCount(count=>count+1)}>
        I've been clicked {count} times
      </button>
      <input type= "text" placeholder= "Type away..." 
      value={text} onChange={(e)=> setText(e.target.value)}/>
    </div>
    
  ) 
}

export default App;
