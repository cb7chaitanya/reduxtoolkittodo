import './App.css';
import AddToDo from './components/AddToDo.js';
import Todos from './components/Todos';

function App() {
  return (
    <>
    <div className='App bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 h-screen w-full'>
      <h1 className='text-zinc-200 text-3xl pt-12 sm:text-4xl sm:pt-20 md:text-6xl md:pt-28 font-serif font-light'>Daily Task Planner</h1>
      <AddToDo></AddToDo>
      <Todos />
    </div>
    </>
  );
}

export default App;
