import React  from 'react';
 const Child=({generatedata})=>{
    const data=()=>{
        const d="Hello Vineeth";
        generatedata(d);
    }

    return(
        <div>
            <button onClick={data}>Send Data to Parent</button>
        </div>
    );
};
export default Child;