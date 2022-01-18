import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './store/messageSlice'
import settingsSlice from './store/settingsSlice';

export default configureStore({
  reducer: {
    message : messageSlice,
    setting : settingsSlice,
  },
})