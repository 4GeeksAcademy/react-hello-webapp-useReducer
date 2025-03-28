import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

const CardCounter = () => {
    const { store, dispatch} = useGlobalReducer();
    return(
        <div>
            <ul>
            {store.todos.map((task) =>(
                <li key = {TextTrackList.id} className="Listaten">{task.label}</li>
            ))}
            </ul>
            <button onClick = {() => dispatch({type:"ADD_TODO",payload:{id:store.textos.length +1, label:`Task${store.todos.length +1 }`}})}>
            + AddTask
            </button>
        </div>  
    );
};