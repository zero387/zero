import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem("jobs")) || [];

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addJob: (state, action) => {
      const newJob = {
        id: generateId(),
        name: action.payload.name,
        status: action.payload.status,
      };

      state.push(newJob);
      localStorage.setItem('jobs', JSON.stringify(state));
    },
    deleteJob: (state, action) => {
      state.splice(action.payload,1);
      localStorage.setItem('jobs', JSON.stringify(state));
    },
    changeStatus: (state, action) => {
        let index = state.findIndex((item)=>{
            return item.id === action.payload
        })
        state[index].status = !state[index].status;
        localStorage.setItem('jobs',JSON.stringify(state))
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJob, deleteJob,  changeStatus } = todoList.actions;

export default todoList.reducer;
