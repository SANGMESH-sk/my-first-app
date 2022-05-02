import { isDisabled } from '@testing-library/user-event/dist/utils';
import react, { useState } from 'react';

function Functional(){
    const[data,setData] = useState(0);
    const increment = () =>{
        setData(data+1);
    }
    const decrement = () =>{
        setData(data-1);
       
    }
    return(
        <div>
            <p>this is function Component</p>
            <button className='btn btn-primary mr-2' onClick={increment}>Increment</button>
            <button className='btn btn-primary'onClick={decrement}>Decrecrement</button>
            <h1>{data}</h1>

        </div>
    
    
    
    ) 

}
export default Functional;