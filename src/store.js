import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './store/messageSlice'

export default configureStore({
  reducer: {
    message : messageSlice
  },
})