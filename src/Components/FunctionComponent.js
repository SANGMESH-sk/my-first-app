import { isDisabled } from '@testing-library/user-event/dist/utils';
import react, { useState } from 'react';



function Functional(prop){
    let [data,setData] = useState(0);
    //
    const increment = () =>{
        setData(data+1);
    }
    const decrement = () =>{
        setData(data-1);
       
    }
    return(
        <div>
            <center>
            <p>this is function Component</p>
            <button className='btn btn-success mr-2' onClick={increment}>Increment</button> &nbsp;&nbsp;&nbsp;
            <button className='btn btn-danger'onClick={decrement}>Decrecrement</button>
            <h1>{data}</h1>
            <h1>{prop.name}</h1>
         

            </center>
           
       
        <br></br>
        </div>
    ) 

}
export default Functional;