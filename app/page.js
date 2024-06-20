'use client'
import React, { useState } from 'react'

const page = () => {

    const [Title , setTitle] = useState('');
    const [Desc , setDesc] = useState('');
    const [MainTask , setMainTask] = useState([]);
    const submitHandler = function(e){
      e.preventDefault();
      // console.log(Title);
      // console.log(Desc);
      setMainTask([...MainTask, {Title, Desc}]);
      setTitle('');
      setDesc('');
    };


    const deleteHandler = function(i){
      let copytask = [...MainTask]
      copytask.splice(i,1);
      setMainTask(copytask);
    };



    let renderTask = <h2>No Task Available</h2>

   if(MainTask.length>0){
    renderTask = MainTask.map(function(tasks, i){
      return (
      <li key={i} className='flex items-center justify-between'>
        <div className='flex justify-between items-center mb-5 w-2/3'>
          <h5 className='text-xl font-semibold'>{tasks.Title}</h5>
          <h6 className='text-xl font-semibold'>{tasks.Desc}</h6>
        </div>
        <button onClick={function(){
          deleteHandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded-lg font-bold'>Delete</button>
      </li>
      )
    })
   }



  return (
    <>
      <h1 className='font-bold py-5 bg-black text-white text-6xl text-center'>My Todo List</h1>
      <form className='mt-10 flex gap-10 px-10' onSubmit={submitHandler}>
          <input className='border-2 border-black px-10 py-3 text-xl' placeholder='Enter Task Here' value={Title} onChange={function(e){
            // console.log(e.target.value);
            setTitle(e.target.value);
            // console.log(Title);
          }}/>
          <input className='border-2 border-black px-10 py-3 text-xl' placeholder='Enter Description Here' value={Desc} onChange={function(e){
            setDesc(e.target.value);
          }}/>
          <button className='px-10 py-3 font-bold text-white bg-black rounded-lg' type='submit'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-300 mt-10'>
        {renderTask}
      </div>
    </>
  )
}

export default page