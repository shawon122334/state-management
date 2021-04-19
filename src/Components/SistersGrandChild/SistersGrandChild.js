import React, { useContext } from 'react';
import { CountContext } from '../../App';

const SistersGrandChild = () => {
    const count = useContext(CountContext);
    return (
        <div>
            <h4>This is Sisters Grand Child : {count}</h4>
        </div>
    );
};

export default SistersGrandChild;