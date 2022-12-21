import React, { useState } from "react";

export function InputField(props) {

    const [input, setInput] = useState('');

    const handleChange = (event) => { 
        event.preventDefault();
        setInput(event.target.value); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const emptyInputHandler = (input? props.onSubmit(input): setInput(''));
        event.target.reset();
        setInput('');
    }

    return(
        <form className="inputForm" onSubmit={handleSubmit}>

            <input className="inputField" type='text' placeholder="Enter task" onChange={handleChange}></input>

            <button className="inputButton" type="submit">
                ADD TODO
            </button>

        </form>
    )
}