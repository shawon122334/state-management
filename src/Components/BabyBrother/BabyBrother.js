import React, { useContext } from 'react';
import { CountContext } from '../../App';

const BabyBrother = () => {
    const [count,setCount]= useContext(CountContext);
    return (
        <div>
            <button onClick={()=>setCount('laptop')}>increase by 2</button>
            <h2>This is Baby Brother count : </h2>
        </div>
    );
};

export default BabyBrother;