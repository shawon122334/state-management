import React, { useContext, useState } from 'react';
import { CountContext } from '../../App';

const Brother = () => {
    const [count,setCount] = useContext(CountContext);
    return (
        <div>
            <h2>This is Brother</h2>
            <h2>count : {count}</h2>
            <button onClick={()=>setCount('laptop')}>laptop</button>
            <button onClick={()=>setCount('ball')}>ball</button>
            <button onClick={()=>setCount('bat')}>bat</button>
        </div>
    );
};

export default Brother;