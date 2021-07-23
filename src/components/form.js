import {React} from "react";

const Form = (props) => {
  
    return (
        <form>
        <label htmlFor="datePicker" className="label">Select your Birth date:</label>
        <input type="date" id="datePicker" required value={props.date}
        onChange={(e) => {props.setDate(e.target.value)}}
        />
        <label htmlFor="luckyNo" className="label">Enter your Lucky Number:</label>
        <input type="number" required min="1"step="1" id="LuckyNo" 
        onChange={(e) => {props.setNum(e.target.value)}}
        value={props.num}/>
        <button type="submit" onClick={props.handleSubmit}>check</button>
      </form>
    );
}

export default Form;