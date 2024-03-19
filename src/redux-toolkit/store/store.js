import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter'; // Đổi tên biến counter thành counterReducer
import todolistReducer from '../reducers/todolist'; // Đổi tên biến todolit thành todolistReducer

export const store = configureStore({
  reducer: {
    counter11: counterReducer, // Đổi tên biến counter thành counterReducer
    todolist11: todolistReducer, // Đổi tên biến todolit thành todolistReducer
  },
});
