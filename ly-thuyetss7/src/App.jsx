import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJob, deleteJob ,  changeStatus } from './redux/reducers/todoList';

export default function App() {
  const [job, setJob] = useState({
    name: '',
    id: '',
    status: false
  });
  const [jobs, setJobs] = useState([]);

  const handleChange = (event) => {
    setJob({
      name: event.target.value,
      id: '',
      status: false,
    });
  }

  const getJobs = useSelector((state) => {
    return state.todoList
  });
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(addJob(job));
    setJob({
      name: '',
      id: '',
      status: false
    });
  }

  const handleCheckboxChange = (id) => {
   dispatch( changeStatus(id))
    
  
  };

  return (
    <div>
      <p>todolist</p>
      <input 
        type="text"
        value={job.name}
        onChange={handleChange}
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {
          getJobs.map((item, index) => {
            return (
              <li key={index} >
              <p style={{ textDecoration: item.status ? 'line-through' : '' }}>{item.name}</p>

                
                <input 
                  type='checkbox'
                  
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <span 
                  className="material-symbols-outlined"
                  onClick={() => dispatch(deleteJob(index ))}
                >
                  delete
                </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
