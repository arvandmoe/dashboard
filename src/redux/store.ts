import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from './slices/sidebarSlice'
export const store = configureStore({
    reducer: {
        sideBar: sideBarReducer,
    }
})

export interface RootState {
    sideBar: { value: string }
}