import { createSlice } from '@reduxjs/toolkit'

export const SIDEBAR = {
    CAMPAIGN: "CAMPAIGN",
    SETTINGS: "SETTINGS"
}


const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: { value: SIDEBAR.CAMPAIGN },
    reducers: {
        toggleCampaign(state) {
            state.value = SIDEBAR.CAMPAIGN
        },
        toggleSettings(state) {
            state.value = SIDEBAR.SETTINGS
        },
    }
})

export const { toggleCampaign, toggleSettings } = sideBarSlice.actions
export default sideBarSlice.reducer