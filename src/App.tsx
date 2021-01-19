import React, {useState} from 'react';
import Count from './Count';
import './index.css';



function App() {
  const [description, setDescription] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    const inputValue= event.currentTarget.value; 
    setDescription(inputValue); 
  }

  return (
    <div className="App">
      <input value={description} onChange={handleChange}/>
        <Count description={description} />
    </div>
  );
}

export default App;
