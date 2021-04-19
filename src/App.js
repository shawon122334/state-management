import logo from './logo.svg';
import './App.css';
import Brother from './Components/Brother/Brother';
import Sister from './Components/Sister/Sister';
import BabyBrother from './Components/BabyBrother/BabyBrother';
import { createContext, useState } from 'react';

export const CountContext = createContext()
function App() {
  const [count,setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <h2>app.js count : {count}</h2>
      <Brother count={count} setCount={setCount}></Brother>
      <Sister></Sister>
      <BabyBrother></BabyBrother>
    </CountContext.Provider>
  );
}

export default App;
