import React, { useState, useContext } from "react";
import { listContext } from "../App";

export function Todo(props) {

    const name = props.name;
    const [check, setCheck] = useState(props.state);

    const { list, setList } = useContext(listContext);

    const handleCheck = () => {
        setCheck(check ? false : true);
        const index = list.findIndex(item => item.name === name);

        const updatedStateList = list;
        updatedStateList[index] = { name: name , state: !check };
        setList(updatedStateList);
    }

    const handleDelete = () => {
        const updatedList = list.filter(i => i.name !== name);
        setList(updatedList);
    }

    return (
        <li className="todo" >
            <p>{name}</p>
            <div className="todoButtons">
                <button className="check" style={{ backgroundColor: check ? 'lime' : '#73b0e2',  color: check ? 'black' : 'white' }} 
                    onClick={handleCheck}> {check ? 'Done' : 'In progress'} </button>
                <button className="remove" onClick={handleDelete} > ✖ </button>
            </div>
        </li>
    )
}