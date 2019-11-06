import React from 'react'
import { useSelector } from "react-redux"

export default function(props) {
    const list = useSelector (appState => appState.listReducer.list)

    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {list.map((list, i) => (
                    <li key={"list" + i}>{list}</li>
                ))}
            </ul>
        </div>
    )
}


