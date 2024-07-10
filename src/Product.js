import React, { useState } from 'react';
import {Button} from 'reactstrap';

function InputForm() {
    const [value1, setValue1] = useState("");
    const [submittedValue,setSubmittedValue] = useState("");
    const handleChange = event => {
        setValue1(event.target.value);
        //console.log("", event.target.value);
    }
    const handleClick = () =>{
        setSubmittedValue(value1);
}
    return (
        <>
            <div>
                <form>
                    <label>Name:<input onChange={handleChange} type=""/></label>
                </form>
                <Button onClick={handleClick}>Click Button</Button>
            </div>
            <div>
                {submittedValue}
            </div>
        </>
    )
}

export default InputForm;