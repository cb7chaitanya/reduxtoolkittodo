import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'
import { TiDelete } from "react-icons/ti";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch() 
  return (
    <>
    <div className='text-zinc-200 pt-3 font-serif font-semibold text-lg sm:text-xl md:text-2xl'>Tasks planned</div>
    <ul className="list-none mx-6 sm:mx-8 md:mx-12">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-md"
            key={todo.id}
          >
            <div className='text-zinc-200 text-md sm:text-lg md:text-xl'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-purple-600 rounded hover:bg-purple-600 group py-1 px-3"
            >
              <span className="w-0 h-0 rounded bg-red-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-zinc-200 transition-colors duration-300 ease-in-out group-hover:text-white z-10 text-lg sm:text-xl"><TiDelete /></span>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos