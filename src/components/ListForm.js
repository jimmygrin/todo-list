import React, { useState } from 'react' 
import { addToList } from '../actions/listAction'
import { useDispatch } from 'react-redux'

export default function (props) {
    const [todo, setToDo] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(addToList(todo))
    
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='todo' name='todo' value={todo} onChange={e => setToDo(e.target.value)} />
            <button type='submit'>Submit </button>
        </form>
    )

}
