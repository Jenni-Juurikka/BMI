import './App.css';
import React, {useState} from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  function calcBMI(e) {
    e.preventDefault();
    const yourBMI = (weight / Math.pow(height, 2));
    setBMI(yourBMI);
  }

  return (
    <form onSubmit={calcBMI}>
      <h2>BMI calculator</h2>
      <div>
        <label>Height(m):</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
      </div>
      <div>
        <label>Weight(kg):</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Results:</label>
        <output>{bmi.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
