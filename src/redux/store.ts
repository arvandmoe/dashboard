import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from './slices/sidebarSlice'
import campaignReducer from './slices/campaignSlice'
export const store = configureStore({
    reducer: {
        sideBar: sideBarReducer,
        campaign: campaignReducer,
    }
})

export interface RootState {
    sideBar: { value: string },
    campaign: { value: string }
}