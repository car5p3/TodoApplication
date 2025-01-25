import React, { useState } from 'react'
import axios from 'axios'

const CreateComponent = () => {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:5000/api/todo/add', {
      task: task,
      isCompleted: false
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className='flex flex-row items-center justify-center w-full my-4 space-x-2'>
      <input type="text" name="price" id="price" className="border-2 border-solid rounded-md block px-2 py-2 min-w-0 grow text-base text-gray-900 placeholder:text-gray-400 placeholder:italic focus:outline-none sm:text-sm/6" onChange={(e) => setTask(e.target.value)} placeholder="Enter Tasks....." />
      <button className='bg-zinc-300 px-7 py-2 rounded-md' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default CreateComponent