import React, { useContext, useState } from 'react';
import { CountContext } from '../../App';

const Brother = () => {
    const [count,setCount] = useContext(CountContext);
    return (
        <div>
            <h2>This is Brother</h2>
            <h2>count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Value by 1</button>
        </div>
    );
};

export default Brother;