import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up1 } from './redux-toolkit/reducers/counter';
import { addTodo,deleteJob } from './redux-toolkit/reducers/todolist';



export default function App() {
  const [data, setData] = useState({
    name:"",
    id:''
  });
  const count = useSelector((state) => {
    console.log(state);
    return state;
  });
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(up1());
  };

  const addToDoList = () => {
    dispatch(addTodo(data));
  };

  const handleChange = (e) => {
    setData({...data,name:e.target.value,id: Math.floor(Math.random()*100000)});
  };

  const deleteJob1=(id)=>{
      // bạn có muốn xóa không 
      //console.log(id);
      //const check1 = confirm('bạn có muốn xóa hay không')
      //console.log(check1);

      dispatch(deleteJob(id))
      
  }
  return (
    <div>
      <p>Counter value: {count.counter11.value}</p>
      <button onClick={increaseCounter}>Increase Counter</button>
      <input type="text" onChange={handleChange} />
      <button onClick={addToDoList}>Add to To Do List</button>
      <ul>
        {count.todolist11.map((item,index)=>{
        return <li key={index}>
                  {item.name}  <button
                          onClick={()=>deleteJob1(item.id)}
                          >delete</button>
              </li>
        
      })}
      </ul>
      
    </div>
  );
}
