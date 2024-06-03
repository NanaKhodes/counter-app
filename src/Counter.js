import React, {useState} from 'react';

function Counter(){
 const [count,setCount] = useState(0);

 const handleIncrement = () => {
    setCount(count + 1);
 }
 const handleDecrement = () => {
    setCount(count -1);
 }
 const handleReset = () => {
    setCount(0);
 }

 return (
    <div className='counter-container'>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <p>Count: {count}</p>

    </div>
 )
}



export default Counter;