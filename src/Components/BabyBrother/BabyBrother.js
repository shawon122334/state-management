import React from 'react';

const BabyBrother = (props) => {
    const {count}=props;
    return (
        <div>
            <h2>This is Baby Brother count : {count}</h2>
        </div>
    );
};

export default BabyBrother;