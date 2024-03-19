import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteJob: (state, action) => {
      // Xoá một phần tử từ mảng dựa trên action.payload
      console.log("pl",action.payload);
      let index = state.findIndex((item,index)=>{
            return item.id == action.payload
      })
      console.log(index);
      state.splice(index,1)
    },
    capnhap: (state, action) => {
      // Cập nhật một phần tử của mảng bằng action.payload
      state[action.payload.index] = action.payload.value
    },
  },
})

export const { addTodo, deleteJob, capnhap } = todoList.actions

export default todoList.reducer
