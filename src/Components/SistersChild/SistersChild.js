import React from 'react';
import SistersGrandChild from '../SistersGrandChild/SistersGrandChild';

const SistersChild = (props) => {
    console.log(props.product);
    const {name}=props.product;
    
    return (
        <div>
            <h3>This is Sisters Child :  {name}</h3>
            <SistersGrandChild ></SistersGrandChild>
        </div>
            );
};

export default SistersChild;<h3>This is Sisters Child</h3>