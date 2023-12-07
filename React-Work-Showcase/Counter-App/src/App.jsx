import logo from './assets/logo.png';
import './App.css';
import { useState } from 'react';

const numbers = [1, 2, 5, 10];

function App() {
  const [count, setCount] = useState(0);

  // const handleAdd = (num) => {
  //   setCount(count + num);
  // };

  const handleDecrease = (num) => {
    setCount(count - num);
  };

  return (
    <div className="App">
      {/*--- Header ---*/}
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <h1>
          Count:
          <span
            id="count"
            className={count > 0 ? 'positive' : count < 0 ? 'negative' : null}
          >
            {count}
          </span>
        </h1>
      </div>

      {/*--- increment ---*/}
      <div>
        <h4>Increment</h4>

        {numbers.map((num) => (
          <button key={num} onClick={() => setCount((count) => count + num)}>
            + {num}
          </button>
        ))}
      </div>

      {/*--- decrement ---*/}
      <div>
        <h4>Decrement</h4>

        {numbers.map((num) => (
          <button key={num} onClick={() => handleDecrease(num)}>
            - {num}
          </button>
        ))}
      </div>

      {/*--- reset ---*/}
      <div>
        <button onClick={() => setCount(0)} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
