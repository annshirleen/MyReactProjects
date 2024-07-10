import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';


function InputComponent(props) {

  return (
    <div className='Component'>
      <h2>{props.text}</h2>
      <Input />
    </div>
    
  )
}

export default InputComponent;