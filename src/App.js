
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count,setCount] = useState(0)
  const addCount = ()=>{
    setCount(count+1)
    // console.log(count);
  }
  let obj = {
    title:'1st Counter',
    count,
    
  }
  const styleObjAdd = {
    fontSize: 34,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "10px",
    color:'red',
    paddingleft: "210px",
    paddingright: "210px",
   
  
}
  
  return (
    <div style={styleObjAdd}>
      <button style={styleObjAdd} onClick={addCount}>Press ME</button>
      
      <Counter {...obj} />
      <Counter title='2nd Counter' count= {count*2} />
      <Counter title='3rd Counter' count= {count*3} />
      <Counter title='4th Counter' count= {count*4} />
      <Counter title='5th Counter' count= {count*5} />
      <Counter title='6th Counter' count= {count*6} />
      <Counter title='7th Counter' count= {count*7} />
      <Counter title='8th Counter' count= {count*8} />
      <Counter title='9th Counter' count= {count*9} />
      <Counter title='10th Counter' count= {count*10} />
     
    </div>
  );
}

export default App;
