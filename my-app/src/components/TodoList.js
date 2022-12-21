import React, { useState } from "react";
import { Todo } from "./Todo";
import shortid from 'shortid';

export function TodoList(props) {

    return (        
            <ul>
                {props.list.map((item) => (
                    <Todo key={shortid.generate()} name={item.name} state={item.state}/>
            ))}
            </ul>       
    );
}