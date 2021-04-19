import React, { useState } from 'react';

const Brother = (props) => {
    // const [count,setCount] = useState(0);
    const {count,setCount}=props;
    return (
        <div>
            <h2>This is Brother</h2>
            <h2>count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Value</button>
        </div>
    );
};

export default Brother;