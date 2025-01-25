"use client";

import React, { useEffect, useState } from 'react';
import CreateComponent from '../components/CreateComponent';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todo/');
        setTodos(response.data.data.todos);
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleEdit = async (id) => {
    try {
      const result = await axios.put(`http://localhost:5000/api/todo/check/${id}`);
      console.log(result);
      // Optionally, refetch todos to update the list
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:5000/api/todo/delete/${id}`);
      console.log(result);
      // Optionally, refetch todos to update the list
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to TodoApp!</h1>
      <CreateComponent setTodos={setTodos} />

      {todos.length === 0 ? (
        <p className='px-3 text-gray-400 font-mono'>No tasks</p>
      ) : (
        todos.map((todo) => (
          <div className='flex flex-row' key={todo._id}>
            <div className="checkbox flex flex-row">
              {
                todo.done ? <BsFillCheckCircleFill className='icon' /> : <BsCircleFill className='icon' />
              }
              <p
                onClick={() => handleEdit(todo._id)}
                className={`text-gray-900 mx-2 ${todo.done ? 'line-through' : ''}`}
              >
                {todo.task}
              </p>
            </div>
            <div className=''>
              <button onClick={() => handleDelete(todo._id)}><BsFillTrashFill className='icon' /></button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;