import React, { useState } from 'react';
import './App.css';
import InputComponent from './FirstPage';
import ClickButton from './ClickButton';

function App() {
  const [components, setComponents] = useState(["Sample Component"]);

  function addComponent() {

     setComponents([...components, "Sample Component"])

  }
  return (
      <div>
        <h1>React App</h1>
          <InputComponent text="Sample Component"/>
         <ClickButton onClick={addComponent} />
         {components.map((item, i) => (<InputComponent text={item} />))}
         
      </div>
  )
}

export default App;

