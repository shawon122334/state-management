import React, { useContext } from 'react';
import { CountContext } from '../../App';
import SistersChild from '../SistersChild/SistersChild';

const Sister = () => {
    const count= useContext(CountContext);
    return (
        <div style={{border: '1px solid blue'}}>
            <h2>This is Sister :  {count}</h2>
            <SistersChild ></SistersChild>
        </div>
    );
};

export default Sister; 