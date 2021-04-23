import React, { useContext,useState,useEffect } from 'react';
import { CountContext } from '../../App';
import SistersChild from '../SistersChild/SistersChild';
const allProducts=[
    {name: 'Lenovo', count:'laptop'},{name:'asus',count:'laptop'},{name:'dell',count:'laptop'},
    {name:'tennis',count:'ball'},{name:'real ball',count:'ball'},{name:'maruti',count:'ball'},
    {name:'plastic bat',count:'bat'},{name:'wood bat',count:'bat'},{name:'badminton bat',count:'bat'}
]
const Sister = () => {
    const [count]= useContext(CountContext);
    const [products,setProducts] = useState([]);
    useEffect(() =>{
    console.log({count})
        const matchedProduct=allProducts.filter(pd=> pd.count === count)
        setProducts(matchedProduct);
    },[count])
    return (
        <div style={{border: '1px solid blue'}}>
            <h2>This is Sister :  {count}</h2>
            
            {
                products.map(pd=> <SistersChild product={pd}></SistersChild>)
            }
        </div>
    );
};

export default Sister; 