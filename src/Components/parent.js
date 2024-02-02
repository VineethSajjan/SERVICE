import Child from './Child';
import React, { useState }  from 'react';
function Parent(){
    const[childdata,setchilddata] = useState(null);
    const handle=(data)=>{
        setchilddata(data);
    }
    return(
        <div>
        <Child generatedata = {handle} />
        {childdata && <p>Data received from child: {childdata}</p>}
        </div>
    );
};
export default Parent;