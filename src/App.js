import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.css';
import ages from './img/agePre.png';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState({});

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data)
    })
  }

  useEffect(() => {
    handleClick();
  }, [])

  return (
    <div className="App">
      <div className='head'>
        <h1>Age Predictor</h1>
        <p>Enter a name of a person to predict the age</p>
      </div>

      <div className='inputDiv'>
        <input placeholder='Enter a name' onChange={handleChange}></input>
        <button onClick={handleClick}>Predict Age</button>
      </div>

      <div className='outputDiv'>
        <h3> Name : {age?.name}</h3>
        <h3> Age : {age?.age}</h3>
        <h3> Count : {age?.count}</h3>
        <img src={ages}></img>
      </div>
    </div>
  );
}

export default App;
