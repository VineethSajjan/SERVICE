import { useState,useEffect } from "react";
const UseState=()=>{
    const[count,setCount] = useState(0);
    useEffect(()=>{
        document.title=`count:${count}`;
    },[count]);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>click:{count}</button>
        </div>
    )
}
export default UseState;