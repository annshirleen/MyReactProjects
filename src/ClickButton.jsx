import { Button } from "reactstrap";


const ClickButton = (props) => {

    return (
        <button 
        className="AddButton" 
        onClick={props.onClick}>
        Next
        </button> 

    );
}

export default ClickButton;