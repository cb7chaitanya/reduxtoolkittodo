import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

function AddToDo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addToDoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addToDoHandler} className='space-x-3 mt-12'>
        <input type="text" className='bg-gray-800 rounded-md border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 w-[80%] mb-6 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter a task to do...' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-zinc-800 rounded hover:bg-zinc-800 group py-1 px-3">
            <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-zinc-200 transition-colors duration-300 ease-in-out group-hover:text-white z-10">Add to daily task</span>
        </button>
    </form>
  )
}

export default AddToDo